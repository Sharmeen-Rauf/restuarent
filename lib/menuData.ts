export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const menuData: MenuItem[] = [
  // Starters (8 items)
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
  {
    id: 7,
    name: "Original Fried Chicken",
    description: "Crispy, golden fried chicken with our signature spice blend",
    price: "Rs. 1450",
    image: "https://images.unsplash.com/photo-1626087927381-6e1c47179132?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  {
    id: 8,
    name: "Spicy Fried Chicken",
    description: "Extra spicy fried chicken for heat lovers with special seasoning",
    price: "Rs. 1480",
    image: "https://images.unsplash.com/photo-1626087927381-6e1c47179132?w=400&h=300&fit=crop&q=80",
    category: "starters"
  },
  // Salads (8 items)
  {
    id: 9,
    name: "Fresh Garden Salad",
    description: "Crisp mixed greens with fresh vegetables and house dressing",
    price: "Rs. 899",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  {
    id: 10,
    name: "Caesar Salad",
    description: "Classic Caesar salad with romaine lettuce, croutons, and parmesan",
    price: "Rs. 1099",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  {
    id: 11,
    name: "Greek Salad",
    description: "Fresh vegetables with feta cheese, olives, and olive oil dressing",
    price: "Rs. 1199",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  {
    id: 12,
    name: "Chicken Caesar Salad",
    description: "Caesar salad topped with grilled chicken strips",
    price: "Rs. 1299",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  {
    id: 13,
    name: "Fruit Salad",
    description: "Fresh seasonal fruits with honey and mint dressing",
    price: "Rs. 799",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  {
    id: 14,
    name: "Arabic Salad",
    description: "Traditional Arabic salad with fresh vegetables and tahini",
    price: "Rs. 999",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  {
    id: 15,
    name: "Quinoa Salad",
    description: "Healthy quinoa with vegetables and lemon dressing",
    price: "Rs. 1199",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  {
    id: 16,
    name: "Coleslaw Salad",
    description: "Creamy coleslaw with cabbage and carrots",
    price: "Rs. 699",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    category: "salads"
  },
  // Soups (8 items)
  {
    id: 17,
    name: "Chicken Corn Soup",
    description: "Hearty chicken and corn soup, perfect comfort food",
    price: "Rs. 599",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  {
    id: 18,
    name: "Tomato Soup",
    description: "Creamy tomato soup with herbs and croutons",
    price: "Rs. 549",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  {
    id: 19,
    name: "Hot and Sour Soup",
    description: "Spicy and tangy soup with vegetables and chicken",
    price: "Rs. 649",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  {
    id: 20,
    name: "Chicken Noodle Soup",
    description: "Classic chicken noodle soup with vegetables",
    price: "Rs. 699",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  {
    id: 21,
    name: "Lentil Soup",
    description: "Hearty lentil soup with vegetables and spices",
    price: "Rs. 549",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  {
    id: 22,
    name: "Vegetable Soup",
    description: "Fresh vegetable soup with herbs and spices",
    price: "Rs. 599",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  {
    id: 23,
    name: "Cream of Mushroom Soup",
    description: "Rich and creamy mushroom soup",
    price: "Rs. 649",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  {
    id: 24,
    name: "Chicken Clear Soup",
    description: "Light and clear chicken broth with vegetables",
    price: "Rs. 599",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80",
    category: "soups"
  },
  // Burgers (8 items)
  {
    id: 25,
    name: "Classic Burger",
    description: "Juicy chicken patty with fresh vegetables and special sauce",
    price: "Rs. 850",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  {
    id: 26,
    name: "Zinger Burger",
    description: "Spicy zinger patty with crispy coating and fresh toppings",
    price: "Rs. 950",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  {
    id: 27,
    name: "Beef Burger",
    description: "Premium beef patty with cheese and vegetables",
    price: "Rs. 1199",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  {
    id: 28,
    name: "Chicken Cheese Burger",
    description: "Grilled chicken with melted cheese and fresh veggies",
    price: "Rs. 999",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  {
    id: 29,
    name: "BBQ Burger",
    description: "Juicy burger with BBQ sauce and crispy onions",
    price: "Rs. 1050",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  {
    id: 30,
    name: "Double Patty Burger",
    description: "Two juicy patties with double cheese and special sauce",
    price: "Rs. 1299",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  {
    id: 31,
    name: "Veggie Burger",
    description: "Healthy vegetable patty with fresh greens",
    price: "Rs. 799",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  {
    id: 32,
    name: "Fish Burger",
    description: "Crispy fish fillet with tartar sauce and lettuce",
    price: "Rs. 1099",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80",
    category: "burgers"
  },
  // Sandwiches (8 items)
  {
    id: 33,
    name: "Grilled Chicken Sandwich",
    description: "Tender grilled chicken with fresh veggies in soft bread",
    price: "Rs. 750",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  {
    id: 34,
    name: "Club Sandwich",
    description: "Triple layer sandwich with chicken, bacon, and vegetables",
    price: "Rs. 999",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  {
    id: 35,
    name: "Chicken Mayo Sandwich",
    description: "Shredded chicken with mayonnaise and fresh vegetables",
    price: "Rs. 699",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  {
    id: 36,
    name: "BBQ Chicken Sandwich",
    description: "BBQ flavored chicken with coleslaw in toasted bread",
    price: "Rs. 849",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  {
    id: 37,
    name: "Veggie Sandwich",
    description: "Fresh vegetables with cheese and herbs",
    price: "Rs. 649",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  {
    id: 38,
    name: "Egg Sandwich",
    description: "Scrambled eggs with vegetables and sauce",
    price: "Rs. 599",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  {
    id: 39,
    name: "Chicken Cheese Sandwich",
    description: "Grilled chicken with melted cheese and vegetables",
    price: "Rs. 899",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  {
    id: 40,
    name: "Tuna Sandwich",
    description: "Fresh tuna with mayonnaise and vegetables",
    price: "Rs. 799",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80",
    category: "sandwiches"
  },
  // Steaks - Beef (8 items)
  {
    id: 41,
    name: "Beef Steak",
    description: "Premium beef steak cooked to perfection with sides",
    price: "Rs. 2499",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  {
    id: 42,
    name: "Ribeye Steak",
    description: "Juicy ribeye steak with grilled vegetables",
    price: "Rs. 2999",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  {
    id: 43,
    name: "T-Bone Steak",
    description: "Classic T-bone steak with mashed potatoes",
    price: "Rs. 3299",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  {
    id: 44,
    name: "Sirloin Steak",
    description: "Tender sirloin steak with garlic butter",
    price: "Rs. 2799",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  {
    id: 45,
    name: "Beef Fillet Steak",
    description: "Premium fillet steak with peppercorn sauce",
    price: "Rs. 3499",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  {
    id: 46,
    name: "Beef Ribs Steak",
    description: "BBQ beef ribs with coleslaw and fries",
    price: "Rs. 2899",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  {
    id: 47,
    name: "Beef Tenderloin",
    description: "Premium tenderloin with mushroom sauce",
    price: "Rs. 3699",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  {
    id: 48,
    name: "Beef Chops",
    description: "Grilled beef chops with roasted vegetables",
    price: "Rs. 2599",
    image: "https://images.unsplash.com/photo-1607116667981-bee524c4d0fc?w=400&h=300&fit=crop&q=80",
    category: "steaks-beef"
  },
  // Steaks - Chicken (8 items)
  {
    id: 49,
    name: "Chicken Steak",
    description: "Tender chicken steak with grilled vegetables",
    price: "Rs. 1799",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  {
    id: 50,
    name: "Grilled Chicken Steak",
    description: "Perfectly grilled chicken steak with herb butter",
    price: "Rs. 1899",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  {
    id: 51,
    name: "Chicken Fillet Steak",
    description: "Chicken fillet with mushroom sauce and sides",
    price: "Rs. 1999",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  {
    id: 52,
    name: "BBQ Chicken Steak",
    description: "BBQ marinated chicken steak with coleslaw",
    price: "Rs. 1899",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  {
    id: 53,
    name: "Chicken Breast Steak",
    description: "Grilled chicken breast with roasted potatoes",
    price: "Rs. 1799",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  {
    id: 54,
    name: "Chicken Thigh Steak",
    description: "Marinated chicken thigh with garlic sauce",
    price: "Rs. 1699",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  {
    id: 55,
    name: "Spicy Chicken Steak",
    description: "Spicy marinated chicken steak with jalapeños",
    price: "Rs. 1899",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  {
    id: 56,
    name: "Chicken Leg Steak",
    description: "Grilled chicken leg with BBQ sauce",
    price: "Rs. 1749",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
    category: "steaks-chicken"
  },
  // Chinese (8 items)
  {
    id: 57,
    name: "Chicken Chow Mein",
    description: "Stir-fried noodles with chicken and vegetables",
    price: "Rs. 1099",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  {
    id: 58,
    name: "Beef Chow Mein",
    description: "Stir-fried noodles with beef and mixed vegetables",
    price: "Rs. 1199",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  {
    id: 59,
    name: "Chicken Fried Rice",
    description: "Flavorful fried rice with chicken and vegetables",
    price: "Rs. 999",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  {
    id: 60,
    name: "Sweet and Sour Chicken",
    description: "Crispy chicken in sweet and sour sauce",
    price: "Rs. 1299",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  {
    id: 61,
    name: "Kung Pao Chicken",
    description: "Spicy chicken with peanuts and vegetables",
    price: "Rs. 1249",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  {
    id: 62,
    name: "General Tso's Chicken",
    description: "Crispy chicken in sweet and spicy sauce",
    price: "Rs. 1299",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  {
    id: 63,
    name: "Chicken Manchurian",
    description: "Indo-Chinese style chicken in tangy sauce",
    price: "Rs. 1199",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  {
    id: 64,
    name: "Beef with Broccoli",
    description: "Tender beef with fresh broccoli in savory sauce",
    price: "Rs. 1349",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    category: "chinese"
  },
  // Arabic Rice (8 items)
  {
    id: 65,
    name: "Arabic Rice with Chicken",
    description: "Fragrant Arabic rice served with tender chicken pieces",
    price: "Rs. 1599",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
  {
    id: 66,
    name: "Mandi Rice with Chicken",
    description: "Traditional Mandi rice with spiced chicken",
    price: "Rs. 1699",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
  {
    id: 67,
    name: "Kabsa Rice with Beef",
    description: "Aromatic Kabsa rice with tender beef",
    price: "Rs. 1799",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
  {
    id: 68,
    name: "Biryani Rice",
    description: "Fragrant basmati rice with spices and meat",
    price: "Rs. 1599",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
  {
    id: 69,
    name: "Arabic Rice with Lamb",
    description: "Traditional Arabic rice with tender lamb pieces",
    price: "Rs. 1899",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
  {
    id: 70,
    name: "Machboos Rice",
    description: "Spiced rice with chicken and traditional spices",
    price: "Rs. 1649",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
  {
    id: 71,
    name: "Arabic Rice with Fish",
    description: "Aromatic rice with grilled fish and spices",
    price: "Rs. 1749",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
  {
    id: 72,
    name: "Zurbian Rice",
    description: "Traditional Zurbian rice with meat and spices",
    price: "Rs. 1699",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80",
    category: "arabic-rice"
  },
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
