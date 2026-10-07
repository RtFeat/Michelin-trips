# Деплой на Vercel с оптимизацией изображений

## Что изменилось

1. ✅ **API ключ CARTO** добавлен в `city-map-inner.tsx`
2. ✅ **Z-index исправлен** в `routes/index.tsx` - хедер теперь виден
3. ✅ **Sharp перемещен** из devDependencies в dependencies
4. ✅ **LazyImage компонент** с поддержкой WebP и lazy loading
5. ✅ **Preload** критичных изображений в `__root.tsx`

## Шаги для деплоя

### 1. Установите зависимости локально (Git Bash)

```bash
npm install
```

### 2. Сгенерируйте WebP версии изображений (Git Bash)

```bash
npm run optimize:images
```

Это создаст `.webp` версии всех изображений в `public/images/`.

### 3. Закоммитьте все изменения (Git Bash)

```bash
git add .
git commit -m "feat: add CARTO API key, optimize images, fix z-index"
git push
```

### 4. Vercel автоматически задеплоит

Vercel автоматически:
- Установит `sharp` (теперь в dependencies)
- Запустит `npm run optimize:images` (создаст WebP)
- Соберет проект с `npm run build`
- Задеплоит

## Проверка после деплоя

### 1. API ключ CARTO
✓ Водяной знак "API key required" должен исчезнуть с карты

### 2. Z-index
✓ Хедер "Мишленовские путешествия" виден поверх карты

### 3. WebP изображения
Откройте DevTools (F12) → Network → Img:
- Chrome/Edge/Firefox/Safari 14+ загружают `.webp`
- Старые браузеры загружают `.jpg` как fallback

### 4. Lazy loading
Изображения загружаются только когда:
- Вы открываете панель места
- Скроллите до портретов путешественников

## Если что-то не работает на Vercel

### Build падает с ошибкой Sharp
```bash
# Проверьте что sharp в dependencies, а не devDependencies
cat package.json | grep -A 3 '"sharp"'
```

### Старая версия сайта
1. Очистите кеш Vercel: Deployments → Actions → Redeploy
2. Или форсируйте rebuild: пустой коммит
```bash
git commit --allow-empty -m "chore: force rebuild"
git push
```

### WebP файлы не на Vercel
Убедитесь что:
- WebP файлы закоммичены в git
- Или `npm run optimize:images` запускается в build скрипте

## Структура после деплоя

```
public/images/
├── places/
│   ├── isaac-1.jpg      ← 445KB (fallback)
│   ├── isaac-1.webp     ← 319KB (оптимизирован)
│   ├── isaac-2.jpg      ← 470KB
│   ├── isaac-2.webp     ← 337KB
│   └── ...
└── travelers/
    ├── custine.jpg      ← 186KB
    ├── custine.webp     ← 133KB
    └── ...
```

## Результаты оптимизации

- **Размер**: ~29% меньше с WebP
- **Скорость**: изображения загружаются по требованию
- **UX**: shimmer эффект вместо пустого места
- **SEO**: лучший PageSpeed score
