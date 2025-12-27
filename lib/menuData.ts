export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Original Fried Chicken",
    description: "Crispy, golden fried chicken with our signature spice blend",
    price: "Rs. 450",
    image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Original+Fried+Chicken",
    category: "chicken"
  },
  {
    id: 2,
    name: "Spicy Fried Chicken",
    description: "Extra spicy fried chicken for heat lovers",
    price: "Rs. 480",
    image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Spicy+Fried+Chicken",
    category: "chicken"
  },
  {
    id: 3,
    name: "Classic Burger",
    description: "Juicy chicken patty with fresh vegetables and special sauce",
    price: "Rs. 350",
    image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Classic+Burger",
    category: "burgers"
  },
  {
    id: 4,
    name: "Chicken Wrap",
    description: "Tender chicken wrapped in soft tortilla with veggies",
    price: "Rs. 380",
    image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Chicken+Wrap",
    category: "wraps"
  },
  {
    id: 5,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice with succulent chicken pieces",
    price: "Rs. 550",
    image: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Chicken+Biryani",
    category: "rice"
  },
  {
    id: 6,
    name: "Family Deal",
    description: "12 pieces fried chicken with 4 sides and drinks",
    price: "Rs. 2500",
    image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Family+Deal",
    category: "deals"
  },
  {
    id: 7,
    name: "Chicken Strips",
    description: "Crispy chicken strips served with dipping sauce",
    price: "Rs. 420",
    image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Chicken+Strips",
    category: "chicken"
  },
  {
    id: 8,
    name: "Zinger Burger",
    description: "Spicy zinger patty with crispy coating and fresh toppings",
    price: "Rs. 420",
    image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Zinger+Burger",
    category: "burgers"
  },
  {
    id: 9,
    name: "BBQ Wrap",
    description: "Grilled chicken with BBQ sauce and fresh vegetables",
    price: "Rs. 400",
    image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=BBQ+Wrap",
    category: "wraps"
  },
  {
    id: 10,
    name: "Chicken Rice Bowl",
    description: "Steamed rice topped with chicken and vegetables",
    price: "Rs. 480",
    image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Rice+Bowl",
    category: "rice"
  },
  {
    id: 11,
    name: "Combo Deal",
    description: "2 pieces chicken, fries, drink, and dessert",
    price: "Rs. 650",
    image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Combo+Deal",
    category: "deals"
  },
  {
    id: 12,
    name: "Hot Wings",
    description: "Spicy chicken wings served with ranch dip",
    price: "Rs. 450",
    image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Hot+Wings",
    category: "chicken"
  }
];

export const cityMap: Record<string, string> = {
  'karachi': 'Karachi',
  'hyderabad': 'Hyderabad',
  'lahore': 'Lahore',
  'islamabad': 'Islamabad',
  'multan': 'Multan',
  'sialkot': 'Sialkot',
  'faisalabad': 'Faisalabad',
  'rahimyarkhan': 'Rahim Yar Khan',
  'bahawalpur': 'Bahawalpur',
  'larkana': 'Larkana'
};

