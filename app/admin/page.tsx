'use client';

import { useState, useEffect } from 'react';

interface Order {
  _id: string;
  orderId: string;
  items: any[];
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    paymentMethod: string;
    notes?: string;
  };
  location: string;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  grandTotal: number;
  status: string;
  createdAt: string;
}

export default function AdminPanel() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchOrders();
        if (selectedOrder?._id === orderId) {
          setSelectedOrder({ ...selectedOrder, status });
        }
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const formatPrice = (price: number) => {
    return `Rs. ${price.toFixed(0)}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'preparing':
        return 'bg-orange-100 text-orange-800';
      case 'out_for_delivery':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel - Orders</h1>
          <button
            onClick={fetchOrders}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="lg:col-span-2 space-y-4">
            {orders.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-500">No orders yet</p>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order._id}
                  className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedOrder?._id === order._id ? 'ring-2 ring-black' : ''
                  }`}
                  onClick={() => setSelectedOrder(order)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold">Order #{order.orderId}</h3>
                      <p className="text-sm text-gray-600">{formatDate(order.createdAt)}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Customer</p>
                      <p className="font-semibold">{order.customerInfo.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Location</p>
                      <p className="font-semibold">{order.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Items</p>
                      <p className="font-semibold">{order.items.length} items</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total</p>
                      <p className="font-semibold text-red-600">
                        {formatPrice(order.grandTotal)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Details */}
          <div className="lg:col-span-1">
            {selectedOrder ? (
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
                <h2 className="text-2xl font-bold mb-6">Order Details</h2>

                <div className="space-y-6">
                  {/* Customer Info */}
                  <div>
                    <h3 className="font-bold mb-3">Customer Information</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-600">Name:</span>{' '}
                        <span className="font-semibold">{selectedOrder.customerInfo.name}</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Email:</span>{' '}
                        <span className="font-semibold">{selectedOrder.customerInfo.email}</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Phone:</span>{' '}
                        <span className="font-semibold">{selectedOrder.customerInfo.phone}</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Address:</span>{' '}
                        <span className="font-semibold">{selectedOrder.customerInfo.address}</span>
                      </p>
                      <p>
                        <span className="text-gray-600">City:</span>{' '}
                        <span className="font-semibold">{selectedOrder.customerInfo.city}</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Payment:</span>{' '}
                        <span className="font-semibold">
                          {selectedOrder.customerInfo.paymentMethod.toUpperCase()}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="font-bold mb-3">Delivery Location</h3>
                    <p className="text-sm font-semibold">{selectedOrder.location}</p>
                  </div>

                  {/* Items */}
                  <div>
                    <h3 className="font-bold mb-3">Order Items</h3>
                    <div className="space-y-3">
                      {selectedOrder.items.map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                            <p className="text-sm font-semibold">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Totals */}
                  <div>
                    <h3 className="font-bold mb-3">Order Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">{formatPrice(selectedOrder.subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (15%)</span>
                        <span className="font-semibold">{formatPrice(selectedOrder.tax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span className="font-semibold">
                          {formatPrice(selectedOrder.deliveryFee)}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-200 font-bold">
                        <span>Total</span>
                        <span className="text-red-600">
                          {formatPrice(selectedOrder.grandTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Update */}
                  <div>
                    <h3 className="font-bold mb-3">Update Status</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'pending',
                        'confirmed',
                        'preparing',
                        'out_for_delivery',
                        'delivered',
                        'cancelled',
                      ].map((status) => (
                        <button
                          key={status}
                          onClick={() => updateOrderStatus(selectedOrder._id, status)}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                            selectedOrder.status === status
                              ? 'bg-black text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {status.replace('_', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <p className="text-gray-500">Select an order to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

