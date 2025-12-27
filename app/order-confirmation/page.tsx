'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function OrderConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-green-600 text-4xl"></i>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-2">
            Thank you for your order. We've received it and will start preparing soon.
          </p>
          {orderId && (
            <p className="text-sm text-gray-500 mb-8">Order ID: {orderId}</p>
          )}

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold mb-4">What happens next?</h2>
            <ul className="space-y-2 text-sm text-gray-600">
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
            </ul>
          </div>

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
