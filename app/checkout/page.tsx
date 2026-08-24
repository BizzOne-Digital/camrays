'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: form,
          items: items.map(({ productId, name, price, qty, size, scent }) => ({ productId, name, price, qty, size, scent })),
        }),
      });

      if (!res.ok) throw new Error('Failed to place order');
      const order = await res.json();
      setOrderId(order._id);
      clearCart();
    } catch {
      setError('Something went wrong placing your order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (orderId) {
    return (
      <section style={{ padding: '160px 32px 100px', background: 'var(--warm-white)', minHeight: '70vh', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '16px' }}>
            Order Placed!
          </h1>
          <p style={{ color: 'var(--warm-gray)', marginBottom: '8px' }}>Order ID: {orderId}</p>
          <p style={{ color: 'var(--warm-gray)', marginBottom: '32px' }}>
            We&apos;ll reach out to confirm your order and arrange payment on delivery.
          </p>
          <Link href="/products" className="btn-primary">Continue Shopping</Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section style={{ padding: '160px 32px 100px', background: 'var(--warm-white)', minHeight: '70vh', textAlign: 'center' }}>
        <p style={{ color: 'var(--warm-gray)', marginBottom: '24px' }}>Your cart is empty.</p>
        <Link href="/products" className="btn-primary">Shop Products</Link>
      </section>
    );
  }

  return (
    <section style={{ padding: '160px 32px 100px', background: 'var(--warm-white)', minHeight: '70vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '32px' }}>
          Checkout
        </h1>

        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '32px' }}>
          {items.map((item) => (
            <div key={`${item.productId}::${item.size ?? ''}::${item.scent ?? ''}`} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '14px', color: 'var(--charcoal)' }}>
              <span>{item.name}{item.size ? ` (${item.size})` : ''}{item.scent ? ` — ${item.scent}` : ''} × {item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', marginTop: '12px', borderTop: '1px solid rgba(0,0,0,0.08)', fontWeight: '700' }}>
            <span>Total</span>
            <span style={{ color: 'var(--crimson)' }}>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ padding: '14px 18px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '14px' }}
          />
          <input
            required
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={{ padding: '14px 18px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '14px' }}
          />
          <textarea
            required
            placeholder="Delivery Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            rows={3}
            style={{ padding: '14px 18px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '14px', resize: 'vertical' }}
          />

          {error && <p style={{ color: 'var(--crimson)', fontSize: '14px' }}>{error}</p>}

          <button type="submit" disabled={submitting} className="btn-primary" style={{ justifyContent: 'center', border: 'none', cursor: 'pointer', opacity: submitting ? 0.7 : 1 }}>
            {submitting ? 'Placing Order...' : 'Place Order (Cash on Delivery)'}
          </button>
        </form>
      </div>
    </section>
  );
}
