import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section style={{
        position: 'relative', minHeight: '92vh',
        background: 'var(--warm-white)',
        display: 'flex', alignItems: 'flex-start', overflow: 'hidden',
      }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/hero.png"
            alt="CamRay's Prodigious Pomade"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(250,248,244,0.92) 0%, rgba(250,248,244,0.75) 20%, rgba(250,248,244,0) 42%)' }} />
        </div>

        {/* Content */}
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '128px 32px 0', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139,26,26,0.1)', border: '1px solid rgba(139,26,26,0.3)', borderRadius: '100px', padding: '6px 14px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--crimson)' }} />
            <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--crimson)' }}>Organic Collection</span>
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.6vw, 2.75rem)', fontWeight: '800', color: 'var(--charcoal)', lineHeight: '1.12', marginBottom: '12px', textTransform: 'uppercase' }}>
            Nature&apos;s Secret<br />
            <em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>In Every Jar</em>
          </h1>

          <p style={{ fontSize: '14px', color: 'var(--warm-gray)', lineHeight: '1.7', maxWidth: '380px', margin: '0 auto 20px' }}>
            Crafted with organic oils, butters, and herbs using a grandmother&apos;s time-honored recipe.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/products" className="btn-primary" style={{ padding: '11px 22px', fontSize: '12px' }}>
              Shop Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--warm-gray)' }}>Scroll</span>
          <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, var(--crimson), transparent)' }} />
        </div>
      </section>

      {/* ====== INGREDIENTS STRIP ====== */}
      <section style={{ background: 'var(--crimson)', padding: '20px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '48px', animation: 'marquee 20s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {['Shea Butter', 'Coconut Oil', 'Jojoba Oil', 'Lavender', 'Herbs & Botanicals', 'Castor Oil', 'Tea Tree', 'Vitamin E', 'Beeswax', 'Argan Oil',
            'Shea Butter', 'Coconut Oil', 'Jojoba Oil', 'Lavender', 'Herbs & Botanicals', 'Castor Oil', 'Tea Tree', 'Vitamin E', 'Beeswax', 'Argan Oil'].map((ing, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white' }}>
              <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="rgba(255,255,255,0.5)"/></svg>
              {ing}
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      {/* ====== ABOUT PREVIEW ====== */}
      <section style={{ padding: '100px 0', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Image Grid */}
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', gridRow: 'span 2', aspectRatio: '0.75' }}>
              <Image src="/about1.png" alt="Natural oils" width={500} height={667} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '1' }}>
              <Image src="/about2.png" alt="Herbs" width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '1', background: 'var(--crimson)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: '800', color: 'white' }}>5+</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: '6px' }}>Years of Crafting</div>
            </div>
            {/* Badge overlay */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'var(--charcoal)', border: '3px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '12px' }}>
              <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', lineHeight: '1.3' }}>Grandma&apos;s<br/>Recipe</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Our Story</div>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              Born From Love,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Grown by Request</em>
            </h2>
            <div className="divider" />
            <p style={{ fontSize: '16px', color: 'var(--warm-gray)', lineHeight: '1.9', marginTop: '24px', marginBottom: '20px' }}>
              Utilizing my grandmother&apos;s recipe of combining oils, butters, and herbs, I created an amazing treatment for hair, scalp, skin, and lips. For years, I shared this product with only a few people — until the requests started rolling in.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--warm-gray)', lineHeight: '1.9', marginBottom: '36px' }}>
              With the help of a dear friend and the encouragement of loyal customers, CamRay&apos;s Prodigious Pomade was officially born. Every jar is handcrafted with patience, love, and the same recipe that started it all.
            </p>
            <Link href="/about" className="btn-primary">
              Read Full Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:768px){ section > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ====== BENEFITS SECTION ====== */}
      <section style={{ padding: '100px 0', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Why Choose Us</div>
            <h2 className="section-title-light">What Makes Us<br /><em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Prodigious</em></h2>
            <div className="divider-center" style={{ marginTop: '20px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              { icon: 'M4.5 12.5l4 4L20 7', label: 'All Natural', desc: 'Every ingredient is carefully sourced from nature — no synthetics, no harsh chemicals, ever.' },
              { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z', label: 'Handcrafted', desc: 'Each batch is made by hand in small quantities to ensure the highest quality and freshness.' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Multi-Purpose', desc: 'One organic formula that works for hair, scalp, skin, and lips — a complete care solution.' },
              { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: 'Made With Love', desc: 'Started as a family gift, now shared with the world — every jar carries that same personal care.' },
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Affordable Prices', desc: 'Premium quality organic products priced from just $1–$20, making natural care accessible.' },
              { icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', label: 'Loyalty Rewards', desc: 'Buy 5 of any item and get the 6th one free — because we value our repeat customers.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="card-hover" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '36px 28px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(139,26,26,0.2)', border: '1px solid rgba(139,26,26,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon} />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{label}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section style={{ padding: '100px 0', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '12px' }}>Our Products</div>
              <h2 className="section-title">Bestselling<br /><em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Formulas</em></h2>
            </div>
            <Link href="/products" style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--crimson)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              View All Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              { img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80', name: 'Classic Hair Pomade', price: '$12', category: 'Hair Care', badge: 'Bestseller' },
              { img: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&q=80', name: 'Nourishing Skin Butter', price: '$15', category: 'Skin Care', badge: 'Popular' },
              { img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80', name: 'Healing Lip Balm', price: '$8', category: 'Lip Care', badge: 'New' },
              { img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80', name: 'Scalp Revival Treatment', price: '$18', category: 'Scalp Care', badge: '' },
            ].map(({ img, name, price, category, badge }) => (
              <div key={name} className="card-hover" style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ position: 'relative', aspectRatio: '1.1', overflow: 'hidden' }}>
                  <Image src={img} alt={name} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  {badge && (
                    <div style={{ position: 'absolute', top: '14px', left: '14px', background: 'var(--crimson)', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '100px' }}>
                      {badge}
                    </div>
                  )}
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: '6px' }}>{category}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: '600', color: 'var(--charcoal)', marginBottom: '16px' }}>{name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: '700', color: 'var(--crimson)' }}>{price}</span>
                    <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--charcoal)', color: 'white', padding: '10px 18px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '6px', transition: 'background 0.2s' }}>
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section style={{ padding: '100px 0', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Testimonials</div>
            <h2 className="section-title">Loved by Customers,<br /><em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Shared with Friends</em></h2>
            <div className="divider-center" style={{ marginTop: '20px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {[
              { name: 'Maya T.', text: 'I have been using CamRay\'s pomade for over a year now. My hair has never looked or felt this healthy. My friends keep asking what my secret is!', rating: 5, role: 'Hair Care Customer' },
              { name: 'Denise R.', text: 'The skin butter is absolutely incredible. My dry skin cleared up within weeks. I tell everyone I know about this product. Worth every penny!', rating: 5, role: 'Skin Care Customer' },
              { name: 'James L.', text: 'My scalp has always been sensitive. Since switching to CamRay\'s, no more flaking, no more irritation. Completely natural and it actually works.', rating: 5, role: 'Scalp Treatment Customer' },
            ].map(({ name, text, rating, role }) => (
              <div key={name} style={{ background: 'white', borderRadius: '16px', padding: '36px', border: '1px solid rgba(0,0,0,0.06)', position: 'relative' }}>
                {/* Quote mark */}
                <div style={{ position: 'absolute', top: '24px', right: '28px', fontFamily: 'Georgia, serif', fontSize: '80px', color: 'rgba(139,26,26,0.08)', lineHeight: '1', fontWeight: '700' }}>&ldquo;</div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: '15px', color: 'var(--warm-gray)', lineHeight: '1.9', marginBottom: '24px', position: 'relative', zIndex: 1 }}>{text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--crimson)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700', color: 'white', fontSize: '16px' }}>{name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '15px', color: 'var(--charcoal)' }}>{name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--warm-gray)' }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LOYALTY REWARDS BANNER ====== */}
      <section style={{ padding: '80px 0', background: 'var(--crimson)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Loyalty Rewards Program</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', lineHeight: '1.2' }}>
              Buy 5, Get the<br /><em style={{ color: 'var(--gold)' }}>6th One Free</em>
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginTop: '16px', maxWidth: '480px' }}>
              We believe in rewarding loyalty. Order your favorites regularly and enjoy a free product every 6th purchase — our way of saying thank you.
            </p>
          </div>
          <Link href="/contact" className="btn-outline" style={{ flexShrink: 0 }}>
            Start Ordering
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section style={{ padding: '100px 32px', textAlign: 'center', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Ready to Order?</div>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>
            Place Your Order<br /><em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Directly With Us</em>
          </h2>
          <div className="divider-center" />
          <p style={{ fontSize: '16px', color: 'var(--warm-gray)', lineHeight: '1.9', marginTop: '24px', marginBottom: '40px' }}>
            Ordering is simple. Reach out via our contact form, email, or social media. We fulfill every order personally and ship with care. Custom orders are always welcome.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Contact to Order</Link>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', fontSize: '14px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--charcoal)', textDecoration: 'none', border: '2px solid var(--charcoal)', transition: 'all 0.3s' }}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
