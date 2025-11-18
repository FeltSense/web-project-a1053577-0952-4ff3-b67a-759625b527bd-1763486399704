# Savora Restaurant Website

## Project Overview
A modern, professional restaurant website showcasing fine dining services, private events, catering, and membership programs. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Brand Identity
- **Name:** Savora
- **Industry:** Restaurant & Fine Dining
- **Target Audience:** General consumers seeking premium dining experiences
- **Style:** Modern, elegant, and professional with warm amber accents

## Color Palette
- **Primary:** Amber (#d97706) - Represents warmth, quality, and culinary excellence
- **Secondary:** Gray (#1f2937) - Professional and sophisticated
- **Accent:** White (#ffffff) - Clean and elegant
- **Background:** Subtle gradients from amber-50 to white

## Typography
- **Headings:** Playfair Display (serif) - Elegant and refined
- **Body:** Inter (sans-serif) - Modern and readable
- **Scale:** Large, impactful headings (text-5xl to text-7xl)

## Key Features

### 1. Social Discovery
- Instagram-style testimonials carousel
- Visual storytelling through high-quality food photography
- Social media integration in footer
- Member community features

### 2. Services Showcase
- Fine Dining: Seasonal menus with locally sourced ingredients
- Private Events: Elegant spaces for celebrations
- Catering Services: Full-service for all occasions
- Chef's Table: Exclusive culinary experiences

## Technical Stack
- **Framework:** Next.js 14.2.3
- **Language:** TypeScript 5.4.5
- **Styling:** Tailwind CSS 3.4.3
- **Icons:** Lucide React 0.378.0
- **Fonts:** Google Fonts (Inter, Playfair Display)

## Page Sections

### 1. Navigation
- Sticky header with smooth scrolling
- Logo, navigation links, and CTA button
- Mobile-responsive hamburger menu
- Transparent on hero, solid on scroll

### 2. Hero Section
- Full-screen with professional restaurant imagery
- Large, impactful headline: "Exquisite Dining Experiences"
- Clear value proposition and dual CTAs
- Smooth scroll indicator

### 3. Services Section
- 2x2 grid layout with image-based cards
- Each service includes icon, title, description, and image
- Hover effects with scale and shadow transitions
- Clean, spacious design with generous padding

### 4. Testimonials Section
- Interactive carousel with 3 visible testimonials
- Professional member photos and 5-star ratings
- Smooth transitions with navigation controls
- Gradient background (amber-50 to white)
- Different layout from services (carousel vs grid)

### 5. Pricing Section
- Premium membership program at $29/month
- Gradient card design with feature checklist
- Stripe payment integration
- Trust indicators and statistics
- Clear value proposition

### 6. Contact Form
- Split layout: contact info + form
- Form fields: name, email, phone, message
- API integration with form submission endpoint
- Success/error state handling
- Operating hours and contact details

### 7. Footer
- Comprehensive navigation links
- Social media icons with hover effects
- Contact information
- Quick links and service list
- Legal links (Privacy, Terms, Cookies)

## API Integration

### Form Submission
- **Endpoint:** https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- **Method:** POST
- **Required Fields:**
  - name (string)
  - email (string)
  - phone (string)
  - message (string)
  - founder_id (hidden)
  - project_id (hidden)

### Payment Integration
- **Provider:** Stripe
- **Link:** https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00
- **Price:** $29/month membership

## Image Sources
- All images from Unsplash
- High-quality, professional restaurant photography
- Optimized for web performance
- Responsive image loading

## Design Principles

### Layout
- Clean, modern grid-based layouts
- Generous white space (py-24 sections)
- Consistent padding (p-8 to p-12)
- Responsive breakpoints (md, lg)

### Interactions
- Smooth scroll behavior
- Hover effects on all interactive elements
- Scale and shadow transitions (300ms)
- Loading states for form submission

### Accessibility
- Semantic HTML structure
- Alt text for images
- Clear focus states
- Mobile-responsive design

## Performance Optimization
- Next.js image optimization
- Code splitting by component
- Lazy loading for images
- Optimized font loading with display: swap

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS, Android)
- Progressive enhancement approach

## Future Enhancements
- Online reservation system
- Menu browsing with filtering
- Blog section for culinary stories
- Customer account dashboard
- Multi-language support
- Dark mode option

## Maintenance Notes
- Replace placeholder IDs in form submission
- Update Stripe payment link for production
- Optimize images for production build
- Set up analytics tracking
- Configure SEO metadata
- Add sitemap.xml

## Contact Information
- **Address:** 123 Culinary Avenue, Downtown District, NY 10001
- **Phone:** +1 (555) 123-4567
- **Email:** info@savora.com, reservations@savora.com
- **Hours:** Mon-Thu: 11am-10pm, Fri-Sat: 11am-11pm, Sun: 11am-9pm

## Build Instructions
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables
Copy `.env.local.example` to `.env.local` and update with actual values:
- FOUNDER_ID
- PROJECT_ID

## License
Proprietary - All rights reserved