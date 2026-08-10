import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Gallery | CamRay's Prodigious Pomade",
  description: "See our handcrafted organic products, ingredients, and the results our customers love."
};

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', alt: 'Hair Pomade', label: 'Classic Hair Pomade', span: 'col' },
  { src: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80', alt: 'Skin Butter', label: 'Nourishing Skin Butter', span: '' },
  { src: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80', alt: 'Herbs', label: 'Fresh Botanicals', span: '' },
  { src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80', alt: 'Natural oils', label: 'Organic Oil Blends', span: 'row' },
  { src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', alt: 'Lip balm', label: 'Healing Lip Balm', span: '' },
  { src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80', alt: 'Hair oil', label: 'Hair & Scalp Oil', span: '' },
  { src: 'https://images.unsplash.com/photo-1526399232581-2ab5608b6336?w=600&q=80', alt: 'Coconut oil', label: 'Ingredient: Coconut Oil', span: '' },
  { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', alt: 'Deep conditioning', label: 'Deep Conditioning Mask', span: '' },
  { src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', alt: 'Herb butter', label: 'Multipurpose Herb Butter', span: '' },
  { src: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&q=80', alt: 'Skincare', label: 'Natural Skincare', span: 'col' },
  { src: 'https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=600&q=80', alt: 'Product range', label: 'Product Collection', span: '' },
  { src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80', alt: 'Gift set', label: 'Gift Sets Available', span: '' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '50vh', minHeight: '380px', background: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=1400&q=80" alt="Gallery" fill style={{ objectFit: 'cover', opacity: 0.2 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 32px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Our Gallery</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'white' }}>
            Crafted With<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Pride & Purpose</em>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '20px auto 0', lineHeight: '1.8' }}>
            A visual journey through our products, ingredients, and the organic process behind each jar.
          </p>
        </div>
      </section>

      {/* Social Note */}
      <div style={{ background: 'var(--off-white)', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        <p style={{ fontSize: '14px', color: 'var(--warm-gray)' }}>
          See more on our social media — 
          <a href="https://linktr.ee/CamRays" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--crimson)', fontWeight: '600', textDecoration: 'none', marginLeft: '4px' }}>
            @CamRays on Instagram, Facebook & TikTok
          </a>
        </p>
      </div>

      {/* Gallery Grid */}
      <section style={{ padding: '60px 0 100px', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ columns: '3 280px', gap: '20px' }}>
            {galleryImages.map(({ src, alt, label }) => (
              <div key={src} className="card-hover img-overlay" style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', breakInside: 'avoid', cursor: 'pointer', position: 'relative' }}>
                <Image src={src} alt={alt} width={600} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.3s' }} className="gallery-overlay" />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', opacity: 0, transition: 'opacity 0.3s' }} className="gallery-label">
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'white', fontFamily: 'Playfair Display, serif' }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .card-hover:hover .gallery-overlay { opacity: 1 !important; }
          .card-hover:hover .gallery-label { opacity: 1 !important; }
        `}</style>
      </section>

      {/* Send Us Your Photos CTA */}
      <section style={{ padding: '80px 32px', background: 'var(--charcoal)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.5" style={{ marginBottom: '20px' }}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
            Share Your Results
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.85', marginBottom: '32px' }}>
            Using CamRay&apos;s products? We would love to see your results! Tag us on social media or send your photos to <a href="mailto:CRPPomade@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>CRPPomade@gmail.com</a> and we may feature you here.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://linktr.ee/CamRays" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit Our Social Media</a>
            <Link href="/contact" className="btn-outline">Send Us Photos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
