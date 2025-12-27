'use client';

import { useCart } from '@/lib/context/CartContext';

export default function ViewCartButton() {
  const { cart, setIsCartOpen } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('Rs. ', '').replace(',', ''));
      return total + price * item.quantity;
    }, 0);
  };

  const subtotal = calculateTotal();
  const tax = subtotal * 0.15;
  const deliveryFee = 100;
  const grandTotal = subtotal + tax + deliveryFee;

  const formatPrice = (price: number) => {
    return `Rs. ${price.toFixed(0)}`;
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCount === 0) return null;

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg shadow-xl z-40 flex items-center gap-4 transition-all duration-300 hover:scale-105"
    >
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <span className="text-red-600 font-bold text-lg">{cartCount}</span>
      </div>
      <div className="flex flex-col items-start">
        <span className="font-semibold">View Cart</span>
        <span className="text-sm opacity-90">{formatPrice(grandTotal)}</span>
      </div>
    </button>
  );
}

