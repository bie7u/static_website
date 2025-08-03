# Vue.js SPA Migration - Asentus Website

This is the Vue.js Single Page Application version of the Metronic Asentus static website template.

## 🚀 Quick Start

### Development
```bash
cd vue-app
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
vue-app/
├── src/
│   ├── components/           # Reusable components
│   │   ├── HeaderComponent.vue    # Navigation header
│   │   ├── FooterComponent.vue    # Site footer  
│   │   └── LayoutComponent.vue    # Main layout wrapper
│   ├── views/               # Page components
│   │   ├── HomeView.vue          # Homepage with carousel, services, etc.
│   │   ├── AboutView.vue         # About page with team section
│   │   ├── ContactView.vue       # Contact form and info
│   │   ├── ProductsView.vue      # Products showcase
│   │   ├── PricingView.vue       # Pricing plans
│   │   ├── FaqView.vue          # FAQ accordion
│   │   └── WorkView.vue         # Portfolio gallery
│   ├── router/              # Vue Router configuration
│   ├── assets/              # Static assets
│   │   ├── css/             # Global stylesheets
│   │   └── images/          # Image assets
│   ├── App.vue              # Root component
│   └── main.js              # Application entry point
├── public/                  # Public assets (vendor libraries)
└── dist/                    # Production build output
```

## ✨ Features Implemented

### Core SPA Features
- ✅ Vue Router for client-side navigation
- ✅ Component-based architecture
- ✅ Reactive data binding
- ✅ Responsive design preserved

### Page-Specific Features
- **Home**: Auto-rotating carousel, services grid, testimonials, pricing cards
- **About**: Parallax hero section, team members, feature highlights  
- **Contact**: Form validation, contact information display
- **Products**: Product showcase with hover effects
- **Pricing**: Interactive pricing cards with hover states
- **FAQ**: Collapsible accordion with smooth animations
- **Work**: Portfolio gallery with lightbox functionality

### Interactive Components
- ✅ Form validation and submission handling
- ✅ Image carousel with manual/auto navigation
- ✅ Testimonial slider with pagination
- ✅ FAQ accordion with expand/collapse
- ✅ Portfolio lightbox gallery
- ✅ Back-to-top functionality
- ✅ Mobile-responsive navigation

## 🛠 Technical Stack

- **Vue 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **CSS3** - Original styling preserved and enhanced
- **Modern JavaScript** - ES6+ features

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## 🎨 Design Preservation

All visual design elements from the original Metronic Asentus template have been preserved:
- Typography and color schemes
- Layout and spacing
- Animations and hover effects
- Responsive breakpoints
- Icon fonts and images

## 🚀 Deployment

The built files in the `dist/` directory can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Traditional web servers

## 📄 License

This project maintains the original licensing from the Metronic Asentus template by KeenThemes.