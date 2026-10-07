# Установка оптимизации изображений

## ⚠️ Важно: используйте Git Bash!

На вашей системе PowerShell блокирует выполнение npm скриптов. Используйте Git Bash для всех команд ниже.

## Шаг 1: Установите sharp

```bash
npm install sharp --save-dev
```

## Шаг 2: Сгенерируйте WebP версии

```bash
npm run optimize:images
```

Эта команда:
- Найдет все `.jpg` и `.png` файлы в `public/images/`
- Создаст `.webp` версии с 85% качеством
- Покажет экономию места для каждого файла

Пример вывода:
```
🖼️  Генерация WebP версий изображений...

✓ /images/places/isaac-1.jpg → 28.3% экономии
✓ /images/places/isaac-2.jpg → 31.2% экономии
...
✨ Обработано файлов: 18
📊 Общая экономия: 29.4% (5567KB → 3930KB)
```

## Шаг 3: Запустите dev-сервер

```bash
npm run dev
```

## Проверьте результат

1. Откройте приложение в браузере
2. Откройте DevTools (F12) → вкладка Network
3. Фильтр: Img
4. Кликните на любое место на карте чтобы открыть панель
5. Вы увидите что:
   - Браузеры с поддержкой WebP загружают `.webp` (Chrome, Edge, Firefox, Safari)
   - Старые браузеры загружают `.jpg` как fallback
   - Изображения загружаются только когда они видны на экране

## Что изменилось в коде

### Новые файлы:
- `src/components/lazy-image.tsx` - компонент с lazy loading
- `scripts/generate-webp.mjs` - генератор WebP
- `OPTIMIZATION.md` - документация

### Измененные файлы:
- `src/components/image-gallery.tsx` - использует LazyImage
- `src/components/traveler-block.tsx` - использует LazyImage  
- `src/routes/__root.tsx` - preload портретов
- `src/styles.css` - shimmer анимация
- `package.json` - добавлена команда optimize:images

## Если что-то не работает

### WebP файлы не создались
```bash
# Проверьте что sharp установлен
npm list sharp

# Переустановите если нужно
npm install sharp --save-dev --force
```

### Изображения не отображаются
- Проверьте что оригинальные `.jpg` файлы на месте
- Компонент автоматически fallback на JPG если WebP не найден
- Откройте DevTools → Console для ошибок

### Команда npm не работает в PowerShell
Используйте Git Bash! В PowerShell отключено выполнение скриптов.
