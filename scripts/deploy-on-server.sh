#!/bin/bash
# Выполняется на сервере при деплое (вручную или из CI).
# Переход в каталог приложения, pull нужной ветки, install, build, restart PM2.

set -e

APP_NAME="mooprz"
APP_DIR="/var/www/${APP_NAME}"
BRANCH="${DEPLOY_BRANCH:-main}"

cd "$APP_DIR"
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"

pnpm install --frozen-lockfile
pnpm build

pm2 restart "$APP_NAME" --update-env
pm2 save

echo "Deployed ${APP_NAME} from branch ${BRANCH}"
