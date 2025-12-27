import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/db/mongodb';

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    
    const client = await clientPromise;
    const db = client.db('restaurant');
    const ordersCollection = db.collection('orders');

    const result = await ordersCollection.insertOne({
      ...orderData,
      orderId: `ORD-${Date.now()}`,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, orderId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('restaurant');
    const ordersCollection = db.collection('orders');

    const orders = await ordersCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, orders }, { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

