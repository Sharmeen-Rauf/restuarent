'use client';

import { useCart } from '@/lib/context/CartContext';
import { useRouter } from 'next/navigation';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('Rs. ', '').replace(',', ''));
      return total + price * item.quantity;
    }, 0);
  };

  const calculateTax = (subtotal: number) => {
    return subtotal * 0.15; // 15% tax
  };

  const calculateDeliveryFee = () => {
    return 100; // Fixed delivery fee
  };

  const subtotal = calculateTotal();
  const tax = calculateTax(subtotal);
  const deliveryFee = calculateDeliveryFee();
  const grandTotal = subtotal + tax + deliveryFee;

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const formatPrice = (price: number) => {
    return `Rs. ${price.toFixed(0)}`;
  };

  // Calculate estimated delivery time (60 minutes from now)
  const getEstimatedDelivery = () => {
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + 60 * 60000);
    const hours = deliveryTime.getHours();
    const minutes = deliveryTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const dateStr = `${monthNames[deliveryTime.getMonth()]} ${deliveryTime.getDate()}, ${deliveryTime.getFullYear()}`;
    
    return `${dateStr} at ${displayHours}:${formattedMinutes} ${ampm}`;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
            <h2 className="text-2xl font-bold text-black">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 p-6 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <i className="fas fa-shopping-cart text-gray-300 text-6xl mb-4"></i>
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-black mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.price}</p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <i className="fas fa-trash text-xs text-gray-600"></i>
                          </button>
                          <span className="font-semibold text-black w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                          >
                            <i className="fas fa-plus text-xs"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add more items link */}
                <button
                  onClick={onClose}
                  className="text-red-600 hover:text-red-700 font-semibold mb-6"
                >
                  + Add more items
                </button>

                {/* Popular items section */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">Customers often buy these together</p>
                  <div className="flex gap-4 overflow-x-auto">
                    {/* Popular items can be added here */}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with totals and checkout */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 bg-white p-6 sticky bottom-0">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total</span>
                  <span className="font-semibold text-black">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax 15%</span>
                  <span className="font-semibold text-black">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold text-black">{formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span className="text-black">Grand Total</span>
                  <span className="text-red-600">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Delivery estimate */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-blue-800">
                  Your order will be delivered approximately in 60 minutes on {getEstimatedDelivery()}
                </p>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Checkout
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

