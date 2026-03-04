#!/bin/bash
# Однократная настройка сайта mooprz.myunion.pro на сервере.
# Запускать на сервере: bash setup-production.sh
# Не трогает другие сайты: только свой каталог и свой конфиг nginx.

set -e

APP_NAME="mooprz"
DOMAIN="mooprz.myunion.pro"
APP_PORT="3080"
APP_DIR="/var/www/${APP_NAME}"
NGINX_AVAILABLE="/etc/nginx/sites-available"
NGINX_ENABLED="/etc/nginx/sites-enabled"

echo "==> Настройка ${DOMAIN} в ${APP_DIR} (порт ${APP_PORT})"

# 1. Каталог приложения
mkdir -p "$APP_DIR"
cd "$APP_DIR"

# 2. Git: если репозиторий ещё не клонирован — клонировать (GIT_REPO задайте перед запуском или замените ниже)
if [ ! -d .git ]; then
  if [ -z "${GIT_REPO}" ]; then
    echo "Задайте переменную GIT_REPO (URL репозитория), затем запустите снова."
    echo "Пример: export GIT_REPO=https://github.com/USER/mooprz.git && bash setup-production.sh"
    exit 1
  fi
  git clone --depth 1 "$GIT_REPO" .
else
  echo "Репозиторий уже есть в ${APP_DIR}"
fi

# 3. Node / pnpm
if ! command -v node &>/dev/null; then
  echo "Установка Node.js 20..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
if ! command -v pnpm &>/dev/null; then
  npm install -g pnpm
fi

# 4. .env (не перезаписываем, если уже есть)
if [ ! -f .env ]; then
  cp .env.example .env 2>/dev/null || true
  sed -i "s/PORT=.*/PORT=${APP_PORT}/" .env 2>/dev/null || true
  sed -i "s/NODE_ENV=.*/NODE_ENV=production/" .env 2>/dev/null || true
  echo "Создан .env из .env.example. Проверьте и при необходимости отредактируйте: nano ${APP_DIR}/.env"
else
  echo ".env уже существует, не трогаем"
fi

# 5. Первая сборка
pnpm install --frozen-lockfile
pnpm build

# 6. Nginx: только один файл для нашего сайта
NGINX_CONF="${NGINX_AVAILABLE}/${APP_NAME}-${DOMAIN}.conf"
cat > "$NGINX_CONF" << 'NGINX_EOF'
# Только mooprz.myunion.pro — другие сайты не затрагиваются
server {
    listen 80;
    server_name mooprz.myunion.pro;
    location / {
        proxy_pass http://127.0.0.1:3080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
NGINX_EOF
sed -i "s/127.0.0.1:3080/127.0.0.1:${APP_PORT}/" "$NGINX_CONF"
ln -sf "$NGINX_CONF" "${NGINX_ENABLED}/"
nginx -t && systemctl reload nginx

# 7. SSL (certbot) — только для нашего домена (при первом запуске может понадобиться: systemctl stop nginx; certbot ...; systemctl start nginx)
if [ ! -d "/etc/letsencrypt/live/${DOMAIN}" ]; then
  echo "Выпуск SSL для ${DOMAIN} (если nginx занял 80, выполните: systemctl stop nginx; certbot certonly --standalone -d ${DOMAIN} --agree-tos -m admin@myunion.pro; systemctl start nginx)"
  certbot certonly --standalone -d "$DOMAIN" --non-interactive --agree-tos --email admin@myunion.pro 2>/dev/null || true
fi
if [ -d "/etc/letsencrypt/live/${DOMAIN}" ]; then
  # Вставляем SSL-директивы в server { после listen 80;
  if ! grep -q "ssl_certificate" "$NGINX_CONF"; then
    sed -i "/listen 80;/a\\    listen 443 ssl;\\n    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;\\n    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;" "$NGINX_CONF"
  fi
  nginx -t && systemctl reload nginx
fi

# 8. PM2 — только процесс mooprz
if ! command -v pm2 &>/dev/null; then
  npm install -g pm2
fi
cd "$APP_DIR"
pm2 delete "$APP_NAME" 2>/dev/null || true
pm2 start dist/server/node-build.mjs --name "$APP_NAME" --env production
pm2 save
pm2 startup systemd -u root --hp /root 2>/dev/null || true

echo "==> Готово. Сайт: https://${DOMAIN}"
echo "    Репозиторий: ${APP_DIR}. Для автодеплоя по push настройте GitHub Actions (см. docs/DEPLOY.md)."
