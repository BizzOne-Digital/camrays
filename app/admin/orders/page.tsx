'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface OrderRow {
  _id: string;
  customer: { name: string; phone: string };
  total: number;
  status: string;
  createdAt: string;
}

const statuses = ['all', 'pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset loading state when the status filter changes
    setLoading(true);
    const url = filter === 'all' ? '/api/orders' : `/api/orders?status=${filter}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (active) setOrders(data);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [filter]);

  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '24px' }}>
        Orders
      </h1>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            style={{
              padding: '8px 16px', borderRadius: '100px', fontSize: '13px', textTransform: 'capitalize', cursor: 'pointer',
              background: filter === s ? 'var(--crimson)' : 'white',
              color: filter === s ? 'white' : 'var(--charcoal)',
              border: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : orders.length === 0 ? (
        <p style={{ color: 'var(--warm-gray)' }}>No orders found.</p>
      ) : (
        <div style={{ background: 'white', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          {orders.map((order) => (
            <Link
              key={order._id}
              href={`/admin/orders/${order._id}`}
              style={{ padding: '16px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: 'var(--charcoal)' }}
            >
              <span>{order.customer.name} · {order.customer.phone}</span>
              <span>${order.total.toFixed(2)}</span>
              <span style={{ textTransform: 'capitalize' }}>{order.status}</span>
              <span style={{ color: 'var(--warm-gray)', fontSize: '13px' }}>{new Date(order.createdAt).toLocaleDateString()}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
