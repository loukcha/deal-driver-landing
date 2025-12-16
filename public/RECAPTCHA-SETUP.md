# Настройка Google reCAPTCHA v3

## Шаг 1: Получить ключи reCAPTCHA

1. Перейдите на страницу: https://www.google.com/recaptcha/admin/create

2. Заполните форму регистрации:
   - **Название**: Драйвер сделки (или любое другое)
   - **Тип reCAPTCHA**: выберите **reCAPTCHA v3**
   - **Домены**: добавьте ваш домен (например: `example.com`)
     - Можно добавить несколько доменов
     - Для тестирования можно добавить `localhost`
   - Примите условия использования
   - Нажмите **Отправить**

3. Вы получите два ключа:
   - **Site Key (Ключ сайта)** - для фронтенда
   - **Secret Key (Секретный ключ)** - для бэкенда

## Шаг 2: Добавить ключи в проект

### Фронтенд (index.html)

Откройте файл `index.html` и замените `6LdYourSiteKeyHere` на ваш **Site Key**:

```html
<!-- Было: -->
<script src="https://www.google.com/recaptcha/api.js?render=6LdYourSiteKeyHere" async defer></script>

<!-- Стало (пример): -->
<script src="https://www.google.com/recaptcha/api.js?render=6LcExampleSiteKey123456" async defer></script>
```

### Фронтенд (src/pages/Index.tsx)

Откройте файл `src/pages/Index.tsx` (строка ~82) и замените `6LdYourSiteKeyHere` на ваш **Site Key**:

```typescript
// Было:
window.grecaptcha.execute('6LdYourSiteKeyHere', { action: 'submit' })

// Стало (пример):
window.grecaptcha.execute('6LcExampleSiteKey123456', { action: 'submit' })
```

### Бэкенд (public/send-mail.php)

Откройте файл `public/send-mail.php` (строка ~28) и замените `6LdYourSecretKeyHere` на ваш **Secret Key**:

```php
// Было:
$recaptcha_secret = '6LdYourSecretKeyHere';

// Стало (пример):
$recaptcha_secret = '6LcExampleSecretKey789012';
```

## Шаг 3: Пересобрать проект

После замены ключей пересоберите проект:

```bash
npm run build
```

## Шаг 4: Загрузить на хостинг

Загрузите обновленные файлы на Бегет:
- `dist/index.html` → `/public_html/index.html`
- `dist/assets/` → `/public_html/assets/`
- `public/send-mail.php` → `/public_html/send-mail.php`

## Шаг 5: Проверка работы

1. Откройте сайт в браузере
2. Заполните форму и отправьте заявку
3. Проверьте:
   - В консоли браузера (F12) не должно быть ошибок reCAPTCHA
   - Письмо должно прийти на email@btbsales.ru
   - В админке reCAPTCHA появится статистика: https://www.google.com/recaptcha/admin

## Как работает reCAPTCHA v3

- **Прозрачная защита**: пользователь не видит капчу
- **Оценка в фоне**: Google анализирует поведение пользователя
- **Балл от 0.0 до 1.0**:
  - `1.0` - точно человек
  - `0.5` - порог (настроено в коде)
  - `0.0` - вероятно бот
- Если балл < 0.5, форма не отправится

## Настройка порога защиты

В файле `public/send-mail.php` (строка ~35) можно изменить порог:

```php
// Строже (меньше ложных срабатываний, но могут блокироваться реальные пользователи)
if ($recaptcha_data->score < 0.7) { ... }

// Мягче (больше спама пропустит, но меньше блокировок)
if ($recaptcha_data->score < 0.3) { ... }

// Рекомендуемое значение: 0.5 (баланс)
```

## Мониторинг

Следите за статистикой в админке reCAPTCHA:
- https://www.google.com/recaptcha/admin
- Смотрите графики запросов и блокировок
- Корректируйте порог при необходимости

## Возможные проблемы

### Ошибка: "Invalid site key"
- Проверьте, что Site Key правильно вставлен в `index.html` и `Index.tsx`
- Убедитесь, что домен добавлен в настройках reCAPTCHA

### Ошибка: "Invalid secret key"
- Проверьте Secret Key в `send-mail.php`

### Все запросы блокируются
- Снизьте порог в `send-mail.php` (например, до 0.3)
- Проверьте статистику в админке reCAPTCHA

### reCAPTCHA не загружается
- Проверьте подключение к интернету
- Убедитесь, что скрипт Google не блокируется AdBlock

## Поддержка

Документация Google reCAPTCHA: https://developers.google.com/recaptcha/docs/v3
