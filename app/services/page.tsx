import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Services | CamRay's Prodigious Pomade",
  description: "Custom organic product orders, gift sets, and personalized hair and skin care services from CamRay's Prodigious Pomade."
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '52vh', minHeight: '420px', background: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=1400&q=80" alt="Custom orders" fill style={{ objectFit: 'cover', opacity: 0.25 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 32px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Our Services</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'white' }}>
            Personalized Care,<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Made For You</em>
          </h1>
        </div>
      </section>

      {/* Main Services */}
      <section style={{ padding: '100px 0', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>What We Offer</div>
            <h2 className="section-title">Services Tailored<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>To Your Needs</em></h2>
            <div className="divider-center" style={{ marginTop: '20px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              {
                title: 'Custom Product Orders',
                desc: 'Have a specific need in mind? We create custom formulations tailored to your hair type, skin concerns, preferred scents, and desired consistency. Every order is made fresh.',
                img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&q=80',
                features: ['Personalized formulas', 'Choose your scent', 'Custom consistency', 'Made to order'],
                price: 'Starting at $12',
                icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
              },
              {
                title: 'Gift Sets & Bundles',
                desc: 'Perfect for birthdays, baby showers, holidays, or just because. We create beautifully packaged gift sets combining our best-loved products — a thoughtful natural gift.',
                img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&q=80',
                features: ['Custom packaging', 'Mix & match products', 'Gift message included', 'Great for all occasions'],
                price: 'Starting at $20',
                icon: 'M12 8v13m0-13V6a4 4 0 00-4-4H5.45a4 4 0 00-3.955 3.566C1.44 6.21 1 7.527 1 9v2a2 2 0 002 2h1v-2h14v2h1a2 2 0 002-2V9c0-1.473-.44-2.79-1.495-3.434A4 4 0 0016.55 2H16a4 4 0 00-4 4v2z',
              },
              {
                title: 'Bulk & Wholesale Orders',
                desc: 'Running a salon, boutique, or gifting event? We offer bulk pricing on our most popular products. Reach out to discuss quantities, pricing, and turnaround time.',
                img: 'https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=500&q=80',
                features: ['Volume discounts', 'Flexible quantities', 'Business-friendly pricing', 'Reliable turnaround'],
                price: 'Contact for pricing',
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
              },
            ].map(({ title, desc, img, features, price, icon }) => (
              <div key={title} className="card-hover" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(26,26,26,0.5) 100%)' }} />
                </div>
                <div style={{ padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(139,26,26,0.1)', border: '1px solid rgba(139,26,26,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icon}/></svg>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '14px' }}>{title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--warm-gray)', lineHeight: '1.85', marginBottom: '20px' }}>{desc}</p>
                  <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
                    {features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--charcoal)', marginBottom: '8px', fontWeight: '500' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5"><path d="M5 13l4 4L19 7"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: '700', color: 'var(--crimson)' }}>{price}</span>
                    <Link href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '12px' }}>Get Started</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '100px 0', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>How It Works</div>
            <h2 className="section-title-light">Ordering Is<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Simple</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', position: 'relative' }}>
            {[
              { step: '01', title: 'Reach Out', desc: 'Contact us via the form, email, or social media. Tell us what you need and any preferences you have.' },
              { step: '02', title: 'We Confirm', desc: 'We review your order, confirm availability, discuss any customizations, and provide a total price.' },
              { step: '03', title: 'Made Fresh', desc: 'Your products are handcrafted fresh specifically for your order — never sitting on a shelf.' },
              { step: '04', title: 'Delivered', desc: 'We package your order with care and ship it directly to you. Custom orders welcome!' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', border: '2px solid var(--crimson)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', position: 'relative' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: 'var(--crimson)' }}>{step}</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.85' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px', background: 'var(--crimson)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
          Ready to Place<br />Your Custom Order?
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: '1.8' }}>
          We love working with customers to create the perfect product. No order is too small, no request too unique.
        </p>
        <Link href="/contact" className="btn-outline">Contact Us Now</Link>
      </section>
    </>
  );
}
