export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const menuData: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Chicken Nuggets (6 Pcs)",
    description: "Indulge in crispy perfection with golden bites of tender juicy chicken with a perfectly seasoned crunchy coating.",
    price: "Rs. 1199",
    image: "https://images.unsplash.com/photo-1626087927381-6e1c47179132?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  {
    id: 2,
    name: "Spicy Chicken Nuggets (6 Pcs)",
    description: "Indulge in crispy perfection with golden bites of tender juicy chicken with a perfectly seasoned crunchy coating and spicy kick.",
    price: "Rs. 1199",
    image: "https://images.unsplash.com/photo-1626087927381-6e1c47179132?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  {
    id: 3,
    name: "Spicy Mexican Wings",
    description: "Mouth watering fried wings tossed in sweet and tangy Mexican sauce.",
    price: "Rs. 999",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  {
    id: 4,
    name: "Honey Mustard Wings",
    description: "Crispy Fried wings tossed in sweet tangy honey mustard glaze.",
    price: "Rs. 999",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  {
    id: 5,
    name: "Hot Wings",
    description: "Spicy chicken wings served with ranch dip",
    price: "Rs. 950",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  {
    id: 6,
    name: "Chicken Strips",
    description: "Crispy chicken strips served with dipping sauce",
    price: "Rs. 890",
    image: "https://images.unsplash.com/photo-1626087927381-6e1c47179132?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  // Salads
  {
    id: 7,
    name: "Fresh Garden Salad",
    description: "Crisp mixed greens with fresh vegetables and house dressing",
    price: "Rs. 899",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  {
    id: 8,
    name: "Caesar Salad",
    description: "Classic Caesar salad with romaine lettuce, croutons, and parmesan",
    price: "Rs. 1099",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  // Soups
  {
    id: 9,
    name: "Chicken Corn Soup",
    description: "Hearty chicken and corn soup, perfect comfort food",
    price: "Rs. 599",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  // Burgers
  {
    id: 10,
    name: "Classic Burger",
    description: "Juicy chicken patty with fresh vegetables and special sauce",
    price: "Rs. 850",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  {
    id: 11,
    name: "Zinger Burger",
    description: "Spicy zinger patty with crispy coating and fresh toppings",
    price: "Rs. 950",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  // Sandwiches
  {
    id: 12,
    name: "Grilled Chicken Sandwich",
    description: "Tender grilled chicken with fresh veggies in soft bread",
    price: "Rs. 750",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  // Steaks - Beef
  {
    id: 13,
    name: "Beef Steak",
    description: "Premium beef steak cooked to perfection with sides",
    price: "Rs. 2499",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  // Steaks - Chicken
  {
    id: 14,
    name: "Chicken Steak",
    description: "Tender chicken steak with grilled vegetables",
    price: "Rs. 1799",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  // Chinese
  {
    id: 15,
    name: "Chicken Chow Mein",
    description: "Stir-fried noodles with chicken and vegetables",
    price: "Rs. 1099",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  // Arabic Rice
  {
    id: 16,
    name: "Arabic Rice with Chicken",
    description: "Fragrant Arabic rice served with tender chicken pieces",
    price: "Rs. 1599",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
  // Additional items
  {
    id: 17,
    name: "Original Fried Chicken",
    description: "Crispy, golden fried chicken with our signature spice blend",
    price: "Rs. 1450",
    image: "https://images.unsplash.com/photo-1626087927381-6e1c47179132?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  {
    id: 18,
    name: "Family Deal",
    description: "12 pieces fried chicken with 4 sides and drinks",
    price: "Rs. 4500",
    image: "https://images.unsplash.com/photo-1626087927381-6e1c47179132?w=400&h=300&fit=crop&q=80",
    category: "starters"
  }
];

export const categories = [
  { id: 'starters', name: 'Starters' },
  { id: 'salads', name: 'Salads' },
  { id: 'soups', name: 'Soups' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'sandwiches', name: 'Sandwiches' },
  { id: 'steaks-beef', name: 'Steaks by Kababjees (Beef)' },
  { id: 'steaks-chicken', name: 'Steaks by Kababjees (Chicken)' },
  { id: 'chinese', name: 'Chinese' },
  { id: 'arabic-rice', name: 'Arabic Rice' },
];
