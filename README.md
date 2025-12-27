# Kababjees Fried Chicken - Next.js Website Clone

A complete frontend clone of the Kababjees Fried Chicken website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Features menu structure and location selection functionality.

## Features

### 🏠 Header Section
- Logo display
- Location selector with current city display
- Contact information with phone number link
- Complaint submission link
- Shopping cart with item count
- Location icon button

### 📍 Location Selection Modal
- Order type selection (Delivery/Pick-Up)
- Current location detection button (Geolocation API)
- City selection grid with 10 cities:
  - Karachi
  - Hyderabad
  - Lahore
  - Islamabad
  - Multan
  - Sialkot
  - Faisalabad
  - Rahim Yar Khan
  - Bahawalpur
  - Larkana
- Location search functionality
- Modern modal design with smooth animations

### 🍗 Menu System
- Category filtering (All, Fried Chicken, Burgers, Wraps, Rice, Deals)
- Responsive menu grid layout
- Menu items with:
  - Product images
  - Names and descriptions
  - Prices
  - Add to cart functionality
- 12+ menu items across different categories

### 🎨 Design Features
- Modern, responsive design with Tailwind CSS
- Mobile-first approach
- Smooth hover effects and transitions
- Professional color scheme (Orange primary color: #FF6B00)
- Clean and intuitive user interface
- Fully responsive (mobile, tablet, desktop)

### 🛒 Shopping Cart
- Cart counter in header
- Add to cart functionality
- Toast notifications for cart actions
- Cart persistence with localStorage
- React Context API for state management

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Context API** - State management for cart and location
- **Font Awesome** - Icons
- **LocalStorage** - Client-side data persistence

## Project Structure

```
restaurant/
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Header component
│   ├── LocationModal.tsx    # Location selection modal
│   └── MenuSection.tsx      # Menu section with categories
├── lib/
│   ├── menuData.ts          # Menu data and city mapping
│   └── context/
│       ├── CartContext.tsx  # Cart state management
│       └── LocationContext.tsx # Location state management
├── types/                   # TypeScript type definitions
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

## Usage

1. Click on the location button in the header to select your city and order type
2. Browse menu items by category using the category tabs
3. Click "Add to Cart" on any menu item to add it to your cart
4. View cart count in the header
5. Location and cart data persist across page refreshes

## Key Features Implementation

### State Management
- **Cart Context**: Manages shopping cart state with localStorage persistence
- **Location Context**: Manages user location and order type preferences

### Components
- **Header**: Reusable header component with cart count and location display
- **LocationModal**: Modal component for location and order type selection
- **MenuSection**: Menu display with category filtering

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Flexible grid layouts that adapt to screen sizes
- Touch-friendly interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features to Expand

- [ ] Cart sidebar/modal with item management
- [ ] Checkout process
- [ ] User authentication
- [ ] Order tracking
- [ ] Payment integration
- [ ] Product detail modals
- [ ] Reviews and ratings
- [ ] Admin dashboard for menu management
- [ ] Search functionality
- [ ] Filter by price, dietary preferences

## Development Notes

- All components are client-side rendered (using 'use client' directive)
- Cart and location data persist using localStorage
- TypeScript is strictly enforced for type safety
- Tailwind CSS utilities are used for all styling
- Font Awesome icons are loaded via CDN

## Notes

This is a frontend-only clone for demonstration purposes. For a production application, you would need:
- Backend API for menu data and orders
- Database for persistent storage
- Payment gateway integration
- User authentication system
- Order management system
- Admin panel for content management

## License

This project is for educational/demonstration purposes only.
