import Link from "next/link";

export default function RootLayout({ children }) {
  return (
      <div style={{ display: 'flex', gap: '40px' }}>
        <Link style={{ fontSize: '18px', textDecoration: 'underline' }} href="/profile/favorites">My Products</Link>
        {children}
      </div>
  );
}
