'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice } = useCart();

  return (
    <section style={{ padding: '160px 32px 100px', background: 'var(--warm-white)', minHeight: '70vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '32px' }}>
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <p style={{ color: 'var(--warm-gray)', marginBottom: '24px' }}>Your cart is empty.</p>
            <Link href="/products" className="btn-primary">Shop Products</Link>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {items.map((item) => (
                <div key={item.productId} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'white', borderRadius: '16px', padding: '20px 24px', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: '700', color: 'var(--charcoal)' }}>{item.name}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--warm-gray)', marginTop: '4px' }}>${item.price} each</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button onClick={() => updateQty(item.productId, item.qty - 1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.15)', background: 'white', cursor: 'pointer' }}>−</button>
                      <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: '600' }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.productId, item.qty + 1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.15)', background: 'white', cursor: 'pointer' }}>+</button>
                    </div>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700', color: 'var(--crimson)', minWidth: '60px', textAlign: 'right' }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                    <button onClick={() => removeItem(item.productId)} aria-label="Remove" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--warm-gray)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderTop: '2px solid rgba(0,0,0,0.08)' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: 'var(--charcoal)' }}>Total</span>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: '800', color: 'var(--crimson)' }}>${totalPrice.toFixed(2)}</span>
            </div>

            <Link href="/checkout" className="btn-primary" style={{ justifyContent: 'center', width: '100%', marginTop: '24px' }}>
              Proceed to Checkout
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
