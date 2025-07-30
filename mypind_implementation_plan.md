# My Pind Project Website Implementation Plan

## React Router + Vite Edition

## 🎯 Project Overview

Rebuild the My Pind Project website using React Router and Vite, featuring bilingual support (English/Punjabi) and shadcn/ui components for a modern, fast-loading interface.

## 🛠️ Technology Stack

### Frontend Framework

- **Vite** for build tooling and dev server
- **React** with TypeScript
- **React Router v7** for routing
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components

### State Management & Internationalization

- **Zustand** for global state (language switching)
- **react-i18next** for internationalization
- **Local fonts** for Punjabi typography - public/OpenGurbaniAkhar.woff2

### Additional Libraries

- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hook Form** for form handling
- **Zod** for form validation
- **Unsplash API** for high-quality images

## 🎨 Design System Implementation

### CSS Variables Setup

```css
/* app/app.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@font-face {
  font-family: 'PunjabiFont';
  src: url('./assets/fonts/punjabi-font.woff2') format('woff2');
  font-display: swap;
}

:root {
  --font-punjabi: 'PunjabiFont', serif;
  --font-english: 'Inter', sans-serif;
}

.punjabi-text {
  font-family: var(--font-punjabi);
  font-size: 1.1em;
  line-height: 1.6;
}

.english-text {
  font-family: var(--font-english);
}
```

## 🌐 Internationalization Setup

### i18n Configuration

```typescript
// src/lib/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '../locales/en/translation.json'
import paTranslation from '../locales/pa/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    pa: { translation: paTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
```

### Language Store (Zustand)

```typescript
// src/lib/store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LanguageState {
  language: 'en' | 'pa'
  setLanguage: (lang: 'en' | 'pa') => void
  isEnglish: boolean
  isPunjabi: boolean
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      get isEnglish() {
        return get().language === 'en'
      },
      get isPunjabi() {
        return get().language === 'pa'
      },
    }),
    {
      name: 'language-storage',
    }
  )
)
```

### Translation Files

```json
// src/locales/en/translation.json
{
  "hero": {
    "title": "Empowering Punjab's Villages, One Pind at a Time",
    "subtitle": "Help transform your home village through sustainable, data-driven development.",
    "cta": "Get Started"
  },
  "whyMyPind": {
    "title": "Why The My Pind Project?",
    "description": "The My Pind Project is dedicated to transforming and revitalizing the villages of Punjab.",
    "mission": "Our mission is to empower communities by identifying their unique challenges and strengths through rigorous, data-driven research. We work hand-in-hand with local leaders and the Punjabi diaspora, helping each village flourish sustainably for generations to come.",
    "features": {
      "datadriven": {
        "title": "Data-Driven Solutions",
        "description": "We use comprehensive research and analysis to tailor solutions that fit each village's specific needs."
      },
      "community": {
        "title": "Community Empowerment",
        "description": "We partner with local leaders to ensure solutions are practical, culturally respectful, and community-led."
      },
      "sustainable": {
        "title": "Sustainable Development",
        "description": "Our approach aligns with the United Nations Sustainable Development Goals, focusing on long-lasting, positive change."
      }
    }
  }
}
```

```json
// src/locales/pa/translation.json
{
  "hero": {
    "title": "ਪੰਜਾਬ ਦੇ ਪਿੰਡਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ, ਇੱਕ ਸਮੇਂ ਵਿੱਚ ਇੱਕ ਪਿੰਡ",
    "subtitle": "ਟਿਕਾਊ, ਡੇਟਾ-ਚਾਲਿਤ ਵਿਕਾਸ ਦੁਆਰਾ ਆਪਣੇ ਘਰੇਲੂ ਪਿੰਡ ਨੂੰ ਬਦਲਣ ਵਿੱਚ ਮਦਦ ਕਰੋ।",
    "cta": "ਸ਼ੁਰੂ ਕਰੋ"
  },
  "whyMyPind": {
    "title": "ਮਾਇ ਪਿੰਡ ਪ੍ਰੋਜੈਕਟ ਕਿਉਂ?",
    "description": "ਮਾਇ ਪਿੰਡ ਪ੍ਰੋਜੈਕਟ ਪੰਜਾਬ ਦੇ ਪਿੰਡਾਂ ਨੂੰ ਬਦਲਣ ਅਤੇ ਮੁੜ ਸੁਰਜੀਤ ਕਰਨ ਲਈ ਸਮਰਪਿਤ ਹੈ।"
  }
}
```

## 📱 Component Implementation

### Language Toggle Component

```typescript
// src/components/LanguageToggle.tsx
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguageStore } from '@/lib/store'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'pa' : 'en'
    setLanguage(newLang)
    i18n.changeLanguage(newLang)

    // Update URL
    navigate(`/${newLang}${location.pathname === '/' ? '' : location.pathname}`)

    // Update document class for font switching
    document.documentElement.className =
      newLang === 'pa' ? 'punjabi-text' : 'english-text'
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-primary/30 hover:bg-primary/10"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'en' ? 'ਪੰਜਾਬੀ' : 'English'}
    </Button>
  )
}
```

### Hero Section

```typescript
// src/components/sections/Hero.tsx
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-black font-semibold px-8 py-4 text-lg"
          >
            {t('hero.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
```

## 🖼️ Image Management Strategy

### Local Images

```typescript
// src/assets/images/index.ts
import heroBg from './hero-bg.jpg'
import villageScene from './village-scene.jpg'
import sustainableFarming from './sustainable-farming.jpg'

export const images = {
  heroBg,
  villageScene,
  sustainableFarming,
}
```

### Unsplash Integration Hook

```typescript
// src/hooks/useImages.ts
import { useState, useEffect } from 'react'

interface UnsplashImage {
  id: string
  urls: {
    regular: string
    small: string
    thumb: string
  }
  alt_description: string
}

export function useUnsplashImages(query: string, count: number = 1) {
  const [images, setImages] = useState<UnsplashImage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // For development, use placeholder images
        const placeholderImages = Array.from({ length: count }, (_, i) => ({
          id: `placeholder-${i}`,
          urls: {
            regular: `https://picsum.photos/800/600?random=${i}&${query}`,
            small: `https://picsum.photos/400/300?random=${i}&${query}`,
            thumb: `https://picsum.photos/200/150?random=${i}&${query}`,
          },
          alt_description: `${query} image ${i + 1}`,
        }))

        setImages(placeholderImages)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching images:', error)
        setLoading(false)
      }
    }

    fetchImages()
  }, [query, count])

  return { images, loading }
}
```
