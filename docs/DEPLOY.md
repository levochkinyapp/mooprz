# Деплой на mooprz.myunion.pro

Сервер: **89.23.102.48**  
Домен: **mooprz.myunion.pro**  
Сайт поднимается отдельно, другие сайты на сервере не затрагиваются.

---

## 1. Однократная настройка сайта на сервере

Подключитесь по SSH и выполните скрипт один раз (репозиторий будет в `/var/www/mooprz`, nginx — только новый конфиг для mooprz.myunion.pro, порт приложения **3080**).

```bash
ssh root@89.23.102.48
```

На сервере:

```bash
# Скачать скрипт из репозитория (или скопировать содержимое scripts/setup-production.sh)
curl -sL https://raw.githubusercontent.com/USER/mooprz/main/scripts/setup-production.sh -o /tmp/setup-production.sh
# Либо после клонирования репозитория:
# cd /var/www && git clone https://github.com/USER/mooprz.git mooprz && cd mooprz

# Задать URL репозитория и запустить настройку
export GIT_REPO="https://github.com/USER/mooprz.git"
bash /tmp/setup-production.sh
# или из каталога репозитория:
# bash scripts/setup-production.sh
```

Замените `USER/mooprz` на свой репозиторий. Скрипт:

- создаёт каталог `/var/www/mooprz` и клонирует туда git;
- ставит Node/pnpm при необходимости;
- создаёт `.env` из `.env.example` (PORT=3080, NODE_ENV=production);
- собирает проект;
- добавляет **только один** конфиг nginx для mooprz.myunion.pro (прокси на порт 3080);
- по возможности выпускает SSL для mooprz.myunion.pro (certbot);
- запускает приложение через PM2 под именем `mooprz`.

Если certbot не сможет занять порт 80 (уже занят nginx), выполните вручную:

```bash
systemctl stop nginx
certbot certonly --standalone -d mooprz.myunion.pro --agree-tos -m admin@myunion.pro
systemctl start nginx
```

Затем снова запустите скрипт или вручную добавьте в конфиг nginx для mooprz блок `listen 443 ssl` и пути к сертификатам (см. комментарии в `scripts/setup-production.sh`).

---

## 2. Подключение ветки Git и автобилд при push

Используется **GitHub Actions**: при push в ветку **main** выполняется деплой на сервер (pull → install → build → restart PM2).

### 2.1. Секреты в GitHub

В репозитории: **Settings → Secrets and variables → Actions** добавьте:

| Имя             | Описание                          |
|-----------------|-----------------------------------|
| `DEPLOY_HOST`   | IP сервера: `89.23.102.48`        |
| `DEPLOY_USER`   | Пользователь SSH: `root`         |
| `DEPLOY_SSH_KEY`| Приватный SSH-ключ для доступа    |

### 2.2. SSH-ключ для деплоя

На своей машине (если нет ключа для сервера):

```bash
ssh-keygen -t ed25519 -C "deploy-mooprz" -f ~/.ssh/deploy_mooprz -N ""
```

Публичный ключ добавьте на сервер:

```bash
ssh-copy-id -i ~/.ssh/deploy_mooprz.pub root@89.23.102.48
```

Приватный ключ целиком (содержимое `~/.ssh/deploy_mooprz`) вставьте в секрет **DEPLOY_SSH_KEY** в GitHub.

После этого при каждом **push в main** workflow `.github/workflows/deploy.yml` подключается к серверу и выполняет в `/var/www/mooprz`:

- `git pull origin main`
- `pnpm install --frozen-lockfile && pnpm build`
- `pm2 restart mooprz --update-env && pm2 save`

То есть к продовой ветке подключён Git, и билд запускается автоматически при обновлении этой ветки.

---

## 3. Ручной деплой на сервере

Если нужно задеплоить вручную (другая ветка или без CI):

```bash
ssh root@89.23.102.48
cd /var/www/mooprz
export DEPLOY_BRANCH=main   # или другая ветка
bash scripts/deploy-on-server.sh
```

---

## 4. .env на проде

Файл `.env` создаётся скриптом из `.env.example` в `/var/www/mooprz`. При необходимости отредактируйте его на сервере:

```bash
nano /var/www/mooprz/.env
```

Минимально должны быть заданы:

- `PORT=3080`
- `NODE_ENV=production`

---

## 5. Кратко

| Задача              | Действие |
|---------------------|----------|
| Первый раз поднять сайт | На сервере: `export GIT_REPO=... && bash scripts/setup-production.sh` |
| Не ломать другие сайты | Используется только новый конфиг nginx и каталог `/var/www/mooprz`, порт 3080 |
| Подключить ветку и автобилд | Настроить секреты GitHub (DEPLOY_HOST, DEPLOY_USER, DEPLOY_SSH_KEY), push в `main` запускает деплой |
| SSL                 | Certbot только для mooprz.myunion.pro (скрипт или вручную) |
