'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function OrderConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('orderNumber');
  const orderId = searchParams.get('orderId');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const dateStr = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    
    return `${dateStr} at ${displayHours}:${formattedMinutes} ${ampm}`;
  };

  // Calculate estimated delivery time (60 minutes from now)
  const getEstimatedDeliveryTime = () => {
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + 60 * 60000);
    return formatDate(deliveryTime.toISOString());
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-green-600 text-4xl"></i>
          </div>

          {/* Order Confirmed Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 text-center mb-8">
            Thank you for your order. We've received it and will start preparing soon.
          </p>

          {/* Order Number */}
          {orderNumber && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-600 mb-2">Your Order Number</p>
              <p className="text-2xl font-bold text-black">{orderNumber}</p>
            </div>
          )}

          {/* Order Receipt Details */}
          <div className="border-t border-b border-gray-200 py-6 mb-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Order Date & Time</span>
                <span className="font-semibold text-black">{formatDate(new Date().toISOString())}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Delivery Time</span>
                <span className="font-semibold text-red-600">{getEstimatedDeliveryTime()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Delivery Time</span>
                <span className="font-semibold text-black">Approximately 60 minutes</span>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="font-bold mb-4 text-lg">What happens next?</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-600 mt-1"></i>
                <span>You'll receive a confirmation email shortly</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-clock text-orange-600 mt-1"></i>
                <span>Your order will be prepared and delivered within 60 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-blue-600 mt-1"></i>
                <span>We'll contact you if we need any clarification</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-red-600 mt-1"></i>
                <span>Our delivery team will contact you when they're on the way</span>
              </li>
            </ul>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-800">
              <i className="fas fa-info-circle mr-2"></i>
              <strong>Important:</strong> Please keep your order number ({orderNumber || 'N/A'}) handy for any inquiries.
              Our customer service team is available 24/7 to assist you.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/')}
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => router.push('/admin')}
              className="bg-gray-200 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              View Orders (Admin)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
