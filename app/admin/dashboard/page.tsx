import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import Order from '@/models/Order';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  await connectDB();
  const [totalProducts, pendingOrders, recentOrders] = await Promise.all([
    Product.countDocuments(),
    Order.countDocuments({ status: 'pending' }),
    Order.find().sort({ createdAt: -1 }).limit(5).lean(),
  ]);

  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '24px' }}>
        Dashboard
      </h1>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'white', borderRadius: '14px', padding: '24px', flex: 1, border: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '13px', color: 'var(--warm-gray)', marginBottom: '8px' }}>Total Products</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--charcoal)' }}>{totalProducts}</div>
        </div>
        <div style={{ background: 'white', borderRadius: '14px', padding: '24px', flex: 1, border: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '13px', color: 'var(--warm-gray)', marginBottom: '8px' }}>Pending Orders</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--crimson)' }}>{pendingOrders}</div>
        </div>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '16px' }}>
        Recent Orders
      </h2>
      <div style={{ background: 'white', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        {recentOrders.length === 0 ? (
          <p style={{ padding: '24px', color: 'var(--warm-gray)' }}>No orders yet.</p>
        ) : (
          recentOrders.map((order) => (
            <div key={order._id.toString()} style={{ padding: '16px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between' }}>
              <span>{order.customer.name}</span>
              <span>${order.total.toFixed(2)}</span>
              <span style={{ textTransform: 'capitalize', color: 'var(--warm-gray)' }}>{order.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
