import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Our Story | CamRay's Prodigious Pomade",
  description: "Learn the story behind CamRay's Prodigious Pomade — a grandmother's recipe transformed into an organic hair and skin care collection."
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '480px', background: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Image src="/about.png" alt="Natural ingredients" fill style={{ objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 32px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Our Story</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'white', lineHeight: '1.15' }}>
            A Recipe Passed<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Through Generations</em>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '20px auto 0', lineHeight: '1.8' }}>
            From a grandmother&apos;s kitchen to jars that reach customers across the country — this is our story.
          </p>
        </div>
      </section>

      {/* Grandmother's Photo */}
      <section style={{ padding: '80px 0', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '1', maxWidth: '360px', margin: '0 auto' }}>
            <Image src="/grandmother.png" alt="Grandmother" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(139,26,26,0.85), rgba(139,26,26,0.1))', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '16px' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: '600', color: 'white', textAlign: 'center' }}>Grandma&apos;s Approved Recipe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '100px 0', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Our Values</div>
            <h2 className="section-title-light">What We Stand For</h2>
            <div className="divider-center" style={{ marginTop: '16px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Organic Integrity', desc: 'We never compromise on ingredient quality. Everything we use is natural, organic, and purposeful. Your body deserves nothing less.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { title: 'Personal Touch', desc: 'Every product is made by hand, in small batches. There is no factory, no assembly line — just care and craftsmanship in every jar.', icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11' },
              { title: 'Community First', desc: 'This brand was built on community — on people sharing their results with friends and family. We grow together, one referral at a time.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
              { title: 'Transparency', desc: 'What goes into our products, you will know. We list every ingredient and are always available to answer questions about what you are putting on your skin.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map(({ title, desc, icon }) => (
              <div key={title} style={{ padding: '36px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '12px', background: 'rgba(139,26,26,0.2)', border: '1px solid rgba(139,26,26,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icon}/></svg>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.85' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section style={{ padding: '100px 0', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Key Ingredients</div>
            <h2 className="section-title">Nature&apos;s Best,<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Carefully Combined</em></h2>
            <div className="divider-center" style={{ marginTop: '20px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
            {[
              { name: 'Shea Butter', benefit: 'Deep moisture', img: 'https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80' },
              { name: 'Coconut Oil', benefit: 'Strengthens & softens', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80' },
              { name: 'Jojoba Oil', benefit: 'Scalp balance', img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&q=80' },
              { name: 'Castor Oil', benefit: 'Promotes growth', img: 'https://images.unsplash.com/photo-1596470663178-dc2df28026f7?q=80' },
              { name: 'Tea Tree', benefit: 'Anti-bacterial', img: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80' },
              { name: 'Herbs & Botanicals', benefit: 'Healing properties', img: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80' },
            ].map(({ name, benefit, img }) => (
              <div key={name} className="card-hover" style={{ borderRadius: '16px', overflow: 'hidden', background: 'white', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                  <Image src={img} alt={name} width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: '600', color: 'var(--charcoal)' }}>{name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--crimson)', marginTop: '4px' }}>{benefit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px', background: 'var(--crimson)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
          Ready to Experience<br />the Difference?
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: '1.8' }}>
          Join the growing community of customers who have made CamRay&apos;s a part of their daily routine.
        </p>
        <Link href="/products" className="btn-outline">Shop Now</Link>
      </section>
    </>
  );
}
