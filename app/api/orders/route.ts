import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/db/mongodb';

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    
    // Generate unique order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    let client;
    try {
      client = await clientPromise;
    } catch (connectionError: any) {
      console.error('MongoDB connection error:', connectionError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed. Please try again.',
          details: process.env.NODE_ENV === 'development' ? connectionError.message : undefined
        },
        { status: 500 }
      );
    }

    try {
      const db = client.db('restaurant');
      const ordersCollection = db.collection('orders');

      const orderDocument = {
        ...orderData,
        orderNumber,
        orderId: orderNumber,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await ordersCollection.insertOne(orderDocument);

      return NextResponse.json(
        { 
          success: true, 
          orderId: result.insertedId.toString(),
          orderNumber: orderNumber,
        },
        { status: 201 }
      );
    } catch (dbError: any) {
      console.error('Database operation error:', dbError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to save order. Please try again.',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to create order',
        details: process.env.NODE_ENV === 'development' ? error.toString() : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    let client;
    try {
      client = await clientPromise;
    } catch (connectionError: any) {
      console.error('MongoDB connection error:', connectionError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed',
          details: process.env.NODE_ENV === 'development' ? connectionError.message : undefined
        },
        { status: 500 }
      );
    }

    try {
      const db = client.db('restaurant');
      const ordersCollection = db.collection('orders');

      const orders = await ordersCollection
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      // Convert MongoDB ObjectId to string for JSON serialization
      const serializedOrders = orders.map(order => ({
        ...order,
        _id: order._id.toString(),
      }));

      return NextResponse.json({ success: true, orders: serializedOrders }, { status: 200 });
    } catch (dbError: any) {
      console.error('Database operation error:', dbError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to fetch orders',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to fetch orders',
        details: process.env.NODE_ENV === 'development' ? error.toString() : undefined
      },
      { status: 500 }
    );
  }
}
