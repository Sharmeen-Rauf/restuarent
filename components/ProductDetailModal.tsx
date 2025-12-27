'use client';

import { useState } from 'react';
import { MenuItem } from '@/lib/menuData';
import { useCart } from '@/lib/context/CartContext';

interface ProductDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: () => void;
}

export default function ProductDetailModal({ item, isOpen, onClose, onAddToCart }: ProductDetailModalProps) {
  const { addToCart, cart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const cartItem = item ? cart.find(i => i.id === item.id) : null;
  const currentQuantity = cartItem ? cartItem.quantity : quantity;

  if (!isOpen || !item) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(item);
    }
    if (onAddToCart) {
      onAddToCart();
    }
    onClose();
  };

  const handleUpdateCart = () => {
    if (cartItem) {
      updateQuantity(item.id, quantity);
    } else {
      handleAddToCart();
    }
    onClose();
  };

  const price = parseFloat(item.price.replace('Rs. ', '').replace(',', ''));
  const totalPrice = price * quantity;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with close and share buttons */}
          <div className="flex items-center justify-end gap-3 p-4 absolute top-0 right-0 z-10">
            <button
              onClick={() => {}}
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full text-white flex items-center justify-center transition-colors"
            >
              <i className="fas fa-share"></i>
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full text-white flex items-center justify-center transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 p-8">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>

            {/* Right side - Details */}
            <div className="w-full md:w-1/2 p-8 flex flex-col">
              <h2 className="text-3xl font-bold text-black mb-4">{item.name}</h2>
              <p className="text-2xl font-bold text-black mb-4">{item.price}</p>
              <p className="text-gray-600 mb-6">{item.description}</p>

              {/* Special Instructions */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-2">
                  Special Instructions
                </label>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Please enter instructions about this item."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black resize-none"
                  rows={3}
                  maxLength={500}
                />
                <p className="text-xs text-gray-500 mt-1">{specialInstructions.length}/500</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <i className="fas fa-minus text-gray-600"></i>
                </button>
                <span className="text-2xl font-bold text-black w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>

              {/* Add/Update Cart Button */}
              <button
                onClick={cartItem ? handleUpdateCart : handleAddToCart}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <span>{cartItem ? `Update Cart - ${item.price}` : `${item.price}`}</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

