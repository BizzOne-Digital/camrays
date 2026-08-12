'use client';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/gallery', label: 'Gallery' },
  { href: '/admin/orders', label: 'Orders' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/admin/login') return <>{children}</>;

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/admin/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--warm-white)' }}>
      <aside style={{ width: '220px', background: 'var(--charcoal)', padding: '32px 20px', flexShrink: 0 }}>
        <div style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '32px' }}>
          CamRay&apos;s Admin
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '10px 14px', borderRadius: '8px', fontSize: '14px', fontWeight: '500',
                textDecoration: 'none',
                color: pathname?.startsWith(item.href) ? 'white' : 'rgba(255,255,255,0.65)',
                background: pathname?.startsWith(item.href) ? 'var(--crimson)' : 'transparent',
              }}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            style={{
              marginTop: '16px', padding: '10px 14px', borderRadius: '8px', fontSize: '14px', fontWeight: '500',
              textAlign: 'left', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.65)', cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>{children}</main>
    </div>
  );
}
