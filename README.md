# Setapp - Responsive Landing Page

A modern, responsive landing page for Setapp built with React, TypeScript, and Tailwind CSS. This project showcases a subscription service that provides access to multiple Mac applications through a single monthly subscription.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop viewports
- **Component-Based Architecture** - Modular, reusable React components
- **Interactive Carousels** - Video testimonials and user testimonials with navigation
- **Modern UI/UX** - Clean, professional design with smooth transitions
- **TypeScript** - Type-safe codebase for better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid development

## 🛠️ Technologies

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx                    # Navigation header with mobile menu
│   ├── HeroSection.tsx               # Hero section with CTA
│   ├── FeaturesShowcase.tsx          # Features and app showcase section
│   ├── JourneySection.tsx            # User journey section
│   ├── VideoTestimonialSection.tsx   # Video testimonial carousel
│   ├── UserTestimonialsSection.tsx   # User testimonials carousel
│   ├── PromotionalCard.tsx           # Promotional CTA card
│   └── Footer.tsx                    # Footer with links and newsletter
├── data/               # Data files
│   └── testimonials.ts              # Testimonial data
├── utils/              # Utility functions
│   └── socialIcons.tsx              # Social media icon helpers
├── assets/             # Images and SVG files
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎯 Components Overview

### Header
Navigation component with:
- Desktop navigation menu
- Mobile hamburger menu
- Sign in and "Try free" buttons
- Language selector

### HeroSection
Main hero section featuring:
- Headline and pricing information
- Call-to-action buttons
- App store badges
- Animated background elements

### FeaturesShowcase
Displays:
- Setapp features overview
- App categories showcase image

### JourneySection
User journey section explaining:
- How Setapp search works
- App recommendation system

### VideoTestimonialSection
Interactive carousel with:
- Video testimonial quotes
- Navigation arrows
- Pagination dots
- Large play button display

### UserTestimonialsSection
Social testimonials section with:
- Multiple testimonial cards
- Social media icons
- Navigation controls
- Pagination dots

### PromotionalCard
Promotional section with:
- Pricing information
- CTA buttons
- Branding

### Footer
Comprehensive footer including:
- Newsletter subscription
- Navigation links (Home, About, Getting Started)
- Social media links
- DMCA and legal information
- Language selector

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SetApp/SetApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Styling

This project uses Tailwind CSS for styling. All components are styled using Tailwind utility classes, providing:

- Responsive breakpoints (sm, md, lg, xl)
- Consistent spacing and typography
- Custom color palette matching the Setapp brand
- Smooth transitions and hover effects

## 📱 Responsive Breakpoints

- **Mobile**: Default (base styles)
- **Tablet**: `md:` prefix (768px and up)
- **Desktop**: `lg:` prefix (1024px and up)
- **Large Desktop**: `xl:` prefix (1280px and up)

## 🔧 Development

The project uses Vite for fast development with:
- Hot Module Replacement (HMR)
- Fast refresh for React components
- Optimized production builds
- TypeScript support out of the box

## 📝 Code Structure

- **Components**: Each section is a separate component for maintainability
- **State Management**: Component-level state using React hooks
- **Type Safety**: Full TypeScript coverage with type definitions
- **Data**: Centralized data files for easy content management

## 🚢 Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React and TypeScript
