'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email Us', value: 'CRPPomade@gmail.com', href: 'mailto:CRPPomade@gmail.com' },
    { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Call or Text', value: '(646) 391-8240', href: 'tel:6463918240' },
    { icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1', label: 'Social & Links', value: 'linktr.ee/CamRays', href: 'https://linktr.ee/CamRays' },
    { icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', label: 'Website', value: 'CamRaysProdigiousPomade.com', href: 'https://www.CamRaysProdigiousPomade.com' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '50vh', minHeight: '380px', background: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=1400&q=80" alt="Contact" fill style={{ objectFit: 'cover', opacity: 0.2 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 32px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Contact Us</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'white' }}>
            Let&apos;s Talk<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>About Your Order</em>
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '100px 0', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start' }}>
          {/* Left: Info */}
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Get In Touch</div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              We&apos;re Here to<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Help You Order</em>
            </h2>
            <div className="divider" />
            <p style={{ fontSize: '15px', color: 'var(--warm-gray)', lineHeight: '1.9', marginTop: '24px', marginBottom: '40px' }}>
              Ordering is easy — just reach out through any channel below, let us know what you need, and we&apos;ll handle the rest. Custom orders, questions, wholesale inquiries — all are welcome.
            </p>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {contactItems.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', textDecoration: 'none', padding: '20px', background: 'white', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--crimson)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(139,26,26,0.1)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.06)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(139,26,26,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icon}/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: '4px' }}>{label}</div>
                    <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--charcoal)' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: '16px' }}>Follow Us</div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['Instagram', 'Facebook', 'TikTok'].map((platform) => (
                  <a key={platform} href="https://linktr.ee/CamRays" target="_blank" rel="noopener noreferrer"
                    style={{ padding: '10px 18px', background: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--charcoal)', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--crimson)'; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--crimson)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white'; (e.currentTarget as HTMLElement).style.color = 'var(--charcoal)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.1)'; }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: 'white', borderRadius: '24px', padding: '48px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(139,26,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '16px' }}>Message Sent!</h3>
                <p style={{ fontSize: '15px', color: 'var(--warm-gray)', lineHeight: '1.8', marginBottom: '32px' }}>
                  Thank you for reaching out! Camille will get back to you within 24–48 hours to discuss your order.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">Send Another Message</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '8px' }}>Place Your Order</h3>
                <p style={{ fontSize: '14px', color: 'var(--warm-gray)', marginBottom: '32px' }}>Fill out the form and we will respond within 24–48 hours.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '(347) 650-6459' },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '8px' }}>{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={formData[key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        style={{ width: '100%', padding: '14px 18px', border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '10px', fontSize: '15px', color: 'var(--charcoal)', outline: 'none', background: 'var(--warm-white)', fontFamily: 'Inter, sans-serif', transition: 'border-color 0.2s' }}
                        onFocus={e => { e.target.style.borderColor = 'var(--crimson)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '8px' }}>Product Interest</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      style={{ width: '100%', padding: '14px 18px', border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '10px', fontSize: '15px', color: 'var(--charcoal)', outline: 'none', background: 'var(--warm-white)', fontFamily: 'Inter, sans-serif', appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Select a product...</option>
                      <option>Classic Hair Pomade ($12)</option>
                      <option>Nourishing Skin Butter ($15)</option>
                      <option>Healing Lip Balm ($8)</option>
                      <option>Scalp Revival Treatment ($18)</option>
                      <option>Edge Control Pomade ($10)</option>
                      <option>Deep Conditioning Mask ($20)</option>
                      <option>Custom Order</option>
                      <option>Gift Set / Bundle</option>
                      <option>Wholesale Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '8px' }}>Message / Order Details</label>
                    <textarea
                      placeholder="Tell us about your order, preferences, quantity, or any special requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      style={{ width: '100%', padding: '14px 18px', border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '10px', fontSize: '15px', color: 'var(--charcoal)', outline: 'none', background: 'var(--warm-white)', fontFamily: 'Inter, sans-serif', resize: 'vertical', transition: 'border-color 0.2s' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--crimson)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }}
                    />
                  </div>

                  {/* Loyalty reminder */}
                  <div style={{ background: 'rgba(139,26,26,0.06)', border: '1px solid rgba(139,26,26,0.15)', borderRadius: '10px', padding: '14px 18px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <p style={{ fontSize: '13px', color: 'var(--charcoal)' }}>
                      <strong>Loyalty Reward:</strong> Buy 5 of any item, get the 6th free! Mention this in your order.
                    </p>
                  </div>

                  <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '15px' }}>
                    Send Message & Order Request
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <style>{`@media(max-width:768px){section > div{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 0', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>FAQ</div>
            <h2 className="section-title">Frequently Asked<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Questions</em></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'How do I place an order?', a: 'Simply fill out the contact form above, send us an email at CRPPomade@gmail.com, or reach us through our social media. We will confirm your order and arrange fulfillment.' },
              { q: 'Do you do custom orders?', a: 'Absolutely! We love custom orders. Tell us your preferences — scent, consistency, specific concerns — and we will create the perfect formulation just for you.' },
              { q: 'What are your prices?', a: 'Our products range from $1 to $20 depending on the product type and size. Custom orders are priced based on the formulation. We keep things affordable so everyone can access organic care.' },
              { q: 'How long does fulfillment take?', a: 'Since every product is made to order, please allow 3–5 business days for preparation. We will communicate a timeline when you place your order.' },
              { q: 'How does the Loyalty Rewards program work?', a: 'It is simple — buy 5 of the same item across your orders, and your 6th one is free! We keep track and let you know when you have earned your reward.' },
              { q: 'Are your products safe for sensitive skin?', a: 'Yes! All of our products are made with natural, organic ingredients. If you have specific allergies, please mention them in your order and we will accommodate accordingly.' },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: 'white', borderRadius: '12px', padding: '28px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(139,26,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: '600', color: 'var(--charcoal)', marginBottom: '10px' }}>{q}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--warm-gray)', lineHeight: '1.8' }}>{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
