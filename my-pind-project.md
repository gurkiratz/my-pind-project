My Pind Project
🎯 Project Overview
Rebuild the My Pind Project website with modern technologies, featuring bilingual support (English/Punjabi) and using shadcn/ui components for a polished, accessible interface.
🛠️ Technology Stack
Frontend Framework

Next.js 14 (App Router)
TypeScript for type safety
Tailwind CSS for styling
shadcn/ui for UI components

State Management & Internationalization

Zustand for global state (language switching)
next-intl for internationalization
Local fonts for Punjabi typography

Additional Libraries

Framer Motion for animations
Lucide React for icons
React Hook Form for form handling
Zod for form validation

📁 Project Structure
mypind-project/
├── src/
│ ├── app/
│ │ ├── [locale]/
│ │ │ ├── page.tsx (Homepage)
│ │ │ └── layout.tsx
│ │ ├── globals.css
│ │ └── layout.tsx
│ ├── components/
│ │ ├── ui/ (shadcn components)
│ │ ├── sections/
│ │ │ ├── Hero.tsx
│ │ │ ├── WhyMyPind.tsx
│ │ │ ├── HowToMakeDifference.tsx
│ │ │ └── Footer.tsx
│ │ ├── LanguageToggle.tsx
│ │ └── Navigation.tsx
│ ├── lib/
│ │ ├── utils.ts
│ │ ├── fonts.ts
│ │ └── store.ts
│ ├── messages/
│ │ ├── en.json
│ │ └── pa.json (Punjabi)
│ └── public/
│ ├── fonts/
│ │ └── punjabi-font.woff2
│ └── images/
├── middleware.ts
└── next.config.js
🎨 Design System Implementation
Color Palette
css:root {
--primary: #F59E0B; /_ Golden yellow _/
--primary-dark: #D97706;
--secondary: #10B981; /_ Green accent _/
--background: #000000;
--card-bg: rgba(0, 0, 0, 0.8);
--text-primary: #FFFFFF;
--text-secondary: #9CA3AF;
--border: rgba(245, 158, 11, 0.3);
}
Typography

English: Inter or similar modern sans-serif
Punjabi: Custom Gurmukhi font (locally hosted)
Headings: Bold, large scale
Body: Clean, readable sizing

📄 Page Sections Breakdown

1. Hero Section

Background: Dark overlay with village imagery
Content: Main headline, subtitle, CTA
Animation: Fade-in effects, parallax background
Components: Button, Container

2. Why My Pind Project Section

Layout: Text content + hero image (sustainable farming)
Cards: Three feature cards with icons

Data-Driven Solutions
Community Empowerment
Sustainable Development

Components: Card, Badge, Separator

3. How You Can Make a Difference

Process Steps: Three-step process cards

Submit Your Referral
Field Research & Analysis
Get Actionable Insights

Components: Card, Badge, Button

4. Requirements & CTA Section

Checklist: Three requirements with checkmarks
Pricing: £350 subsidized rate information
CTA: "Refer Your Pind" button
Components: Checkbox, Button, Alert

5. Footer

Logo: My Pind Project branding
Contact: Email information
Social: Social media links
Copyright: 2025 attribution
Components: Separator, social icons

🌐 Internationalization Setup
Language Structure
typescript// messages/en.json
{
"hero": {
"title": "Empowering Punjab's Villages, One Pind at a Time",
"subtitle": "Help transform your home village through sustainable, data-driven development.",
"cta": "Get Started"
},
"navigation": {
"home": "Home",
"about": "About",
"contact": "Contact"
}
}

// messages/pa.json  
{
"hero": {
"title": "ਪੰਜਾਬ ਦੇ ਪਿੰਡਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ, ਇੱਕ ਸਮੇਂ ਵਿੱਚ ਇੱਕ ਪਿੰਡ",
"subtitle": "ਟਿਕਾਊ, ਡੇਟਾ-ਚਾਲਿਤ ਵਿਕਾਸ ਦੁਆਰਾ ਆਪਣੇ ਘਰੇਲੂ ਪਿੰਡ ਨੂੰ ਬਦਲਣ ਵਿੱਚ ਮਦਦ ਕਰੋ।",
"cta": "ਸ਼ੁਰੂ ਕਰੋ"
}
}
Font Loading Strategy
typescript// lib/fonts.ts
import localFont from 'next/font/local'

export const punjabiFont = localFont({
src: '../public/fonts/punjabi-font.woff2',
variable: '--font-punjabi',
display: 'swap',
})

export const englishFont = localFont({
src: '../public/fonts/inter.woff2',
variable: '--font-english',
display: 'swap',
})
🔧 Key Components Implementation
Language Toggle Component
typescript// components/LanguageToggle.tsx
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useRouter, usePathname } from 'next/navigation'

export function LanguageToggle() {
// Toggle between 'en' and 'pa' locales
// Update URL and apply font changes
}
Hero Section
typescript// components/sections/Hero.tsx
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export function Hero() {
// Animated hero with background image
// Responsive typography
// CTA button with hover effects
}
Feature Cards
typescript// components/sections/WhyMyPind.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function WhyMyPind() {
// Three feature cards with icons
// Responsive grid layout
// Hover animations
}
📱 Responsive Design Strategy
Breakpoints

Mobile: 320px - 768px
Tablet: 768px - 1024px
Desktop: 1024px+

Key Responsive Features

Fluid typography scaling
Flexible grid layouts
Touch-optimized buttons
Optimized images for different screen sizes
Mobile-first approach

⚡ Performance Optimizations
Image Optimization

Next.js Image component for automatic optimization
WebP format support
Lazy loading for below-the-fold content
Responsive image sizing

Font Loading

Local font hosting to avoid external requests
Font display: swap for better loading experience
Preload critical fonts

Code Splitting

Dynamic imports for heavy components
Route-based code splitting
Component-level lazy loading

🚀 Development Phases
Phase 1: Foundation (Week 1)

Next.js project setup with TypeScript
Install and configure shadcn/ui
Set up Tailwind CSS with custom theme
Configure internationalization (next-intl)
Set up local fonts for English/Punjabi

Phase 2: Core Components (Week 2)

Build reusable UI components
Implement language toggle functionality
Create layout components (Header, Footer)
Set up global state management

Phase 3: Page Sections (Week 3)

Hero section with animations
Why My Pind Project section
How to Make a Difference section
Requirements and CTA section

Phase 4: Content & Localization (Week 4)

Add all English content
Translate content to Punjabi
Test language switching
Optimize font loading for both languages

Phase 5: Polish & Deploy (Week 5)

Add animations and micro-interactions
Performance optimization
Cross-browser testing
Mobile responsiveness testing
Deploy to production

🧪 Testing Strategy
Unit Testing

Component testing with Jest and React Testing Library
Language switching functionality
Form validation

Integration Testing

End-to-end user flows
Language toggle behavior
Responsive design testing

Performance Testing

Lighthouse scores
Core Web Vitals
Font loading performance

📊 Analytics & Monitoring
Implementation

Google Analytics 4 setup
Language preference tracking
CTA button interaction tracking
Form submission tracking

Key Metrics

Page load times
Language toggle usage
Conversion rates on CTA buttons
Mobile vs desktop usage

🔐 SEO Considerations
Technical SEO

Proper meta tags for both languages
Structured data markup
XML sitemap generation
Robots.txt configuration

Content SEO

Hreflang tags for language variants
Localized URLs (/en/ and /pa/)
Alt text for images in both languages
Semantic HTML structure

🚀 Deployment Strategy
Hosting Options

Vercel (Recommended for Next.js)
Netlify
AWS Amplify

Domain Setup

Configure custom domain (mypindproject.com)
SSL certificate setup
CDN configuration for global performance
