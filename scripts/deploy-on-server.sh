#!/bin/bash
# Выполняется на сервере при деплое (вручную или из CI).
# Переход в каталог приложения, pull нужной ветки, install, build, restart PM2.

set -e

APP_NAME="mooprz"
APP_DIR="/var/www/${APP_NAME}"
BRANCH="${DEPLOY_BRANCH:-main}"

cd "$APP_DIR"
# Nginx проксирует на 3080 — приложение должно слушать этот порт
if [ -f .env ]; then
  grep -q ^PORT= .env && sed -i 's/^PORT=.*/PORT=3080/' .env || echo 'PORT=3080' >> .env
else
  echo 'PORT=3080' > .env
fi
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"

pnpm install --frozen-lockfile
pnpm build

pm2 restart "$APP_NAME" --update-env
pm2 save

echo "Deployed ${APP_NAME} from branch ${BRANCH}"
