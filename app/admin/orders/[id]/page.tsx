'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface OrderDetail {
  _id: string;
  customer: { name: string; phone: string; address: string };
  items: { productId: string; name: string; price: number; qty: number; size?: string }[];
  total: number;
  status: string;
  createdAt: string;
}

const statusOptions = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];

export default function AdminOrderDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetch(`/api/orders/${id}`).then((res) => res.json()).then(setOrder);
  }, [id]);

  const handleStatusChange = async (status: string) => {
    setUpdating(true);
    const res = await fetch(`/api/orders/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const updated = await res.json();
    setOrder(updated);
    setUpdating(false);
  };

  if (!order) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '24px' }}>
        Order #{order._id.slice(-6)}
      </h1>

      <div style={{ background: 'white', borderRadius: '14px', padding: '24px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '20px' }}>
        <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>Customer</h3>
        <p>{order.customer.name}</p>
        <p>{order.customer.phone}</p>
        <p>{order.customer.address}</p>
      </div>

      <div style={{ background: 'white', borderRadius: '14px', padding: '24px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '20px' }}>
        <h3 style={{ fontWeight: '700', marginBottom: '12px' }}>Items</h3>
        {order.items.map((item) => (
          <div key={`${item.productId}::${item.size ?? ''}`} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span>{item.name}{item.size ? ` (${item.size})` : ''} × {item.qty}</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', marginTop: '12px', borderTop: '1px solid rgba(0,0,0,0.08)', fontWeight: '700' }}>
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: '14px', padding: '24px', border: '1px solid rgba(0,0,0,0.06)' }}>
        <h3 style={{ fontWeight: '700', marginBottom: '12px' }}>Status</h3>
        <select
          value={order.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          disabled={updating}
          style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '14px', textTransform: 'capitalize' }}
        >
          {statusOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
