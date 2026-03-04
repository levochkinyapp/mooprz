#!/bin/bash
# Выполнить на сервере: настройка SSL для mooprz.myunion.pro и принудительный редирект HTTP→HTTPS.
set -e
DOMAIN="mooprz.myunion.pro"
APP_PORT="3080"
NGINX_CONF="/etc/nginx/sites-available/mooprz-mooprz.myunion.pro.conf"

if [ ! -d "/etc/letsencrypt/live/${DOMAIN}" ]; then
  echo "Остановка nginx для выпуска сертификата..."
  systemctl stop nginx
  certbot certonly --standalone -d "$DOMAIN" --non-interactive --agree-tos --email admin@myunion.pro
  systemctl start nginx
fi

# Полный конфиг: редирект с HTTP на HTTPS, прокси только на 443
if [ -d "/etc/letsencrypt/live/${DOMAIN}" ]; then
  echo "Запись конфига nginx с редиректом HTTP→HTTPS..."
  cat > "$NGINX_CONF" << EOF
# mooprz.myunion.pro: принудительный HTTPS
server {
    listen 80;
    server_name ${DOMAIN};
    return 301 https://\$host\$request_uri;
}
server {
    listen 443 ssl;
    server_name ${DOMAIN};
    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
fi

nginx -t && systemctl reload nginx
echo "SSL и редирект HTTP→HTTPS для ${DOMAIN} настроены."
