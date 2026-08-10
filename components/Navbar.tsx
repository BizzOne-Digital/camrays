'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Shop' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const solid = scrolled || !isHome;
  const linkColor = solid ? 'rgba(255,255,255,0.85)' : 'var(--charcoal)';
  const iconColor = solid ? 'white' : 'var(--charcoal)';

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: solid ? 'rgba(26,26,26,0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        borderBottom: solid ? '1px solid rgba(139,26,26,0.3)' : 'none',
        padding: solid ? '12px 0' : '22px 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image src="/logo.png" alt="CamRay's Prodigious Pomade" width={44} height={44} style={{ height: '44px', width: '44px', objectFit: 'contain' }} priority />
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700', color: iconColor, fontSize: '16px', lineHeight: 1 }}>CamRay&apos;s</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', lineHeight: 1, marginTop: '2px' }}>Prodigious Pomade</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500',
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: linkColor,
                  textDecoration: 'none', transition: 'color 0.2s',
                  padding: '4px 0', borderBottom: '2px solid transparent',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = solid ? 'var(--gold)' : 'var(--crimson)'; (e.target as HTMLElement).style.borderBottomColor = 'var(--crimson)'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = linkColor; (e.target as HTMLElement).style.borderBottomColor = 'transparent'; }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="desktop-nav">
          <Link href="/cart" style={{ position: 'relative', color: iconColor, display: 'flex' }} aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
            </svg>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-10px', background: 'var(--crimson)', color: 'white',
                borderRadius: '50%', width: '18px', height: '18px', fontSize: '10px', fontWeight: '700',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{totalItems}</span>
            )}
          </Link>
          <Link href="/products" className="btn-primary" style={{ fontSize: '12px', padding: '10px 22px' }}>
            Order Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2">
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(26,26,26,0.98)', padding: '20px 32px 28px', borderTop: '1px solid rgba(139,26,26,0.3)' }} className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500',
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white',
                textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block', padding: '12px 0',
              fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500',
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white',
              textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            Cart {totalItems > 0 ? `(${totalItems})` : ''}
          </Link>
          <Link href="/products" className="btn-primary" style={{ marginTop: '20px', fontSize: '13px' }}>
            Order Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
