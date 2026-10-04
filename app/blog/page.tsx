import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { posts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog — Aria',
  description: 'Technical writing on production AI systems for finance operations and other domains where a wrong answer costs real money.',
  alternates: {
    types: {
      'application/rss+xml': '/blog/rss.xml',
    },
  },
};

export default function BlogIndex() {
  return (
    <>
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '80px 40px' }}>
      <Link href="/" style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)', textDecoration: 'none', letterSpacing: '0.06em' }}>
        ← aria.mileswaite.net
      </Link>

      <h1 style={{ marginTop: 48, marginBottom: 8, fontSize: 'clamp(28px, 4vw, 40px)' }}>Blog</h1>
      <p style={{ color: 'var(--muted)', marginBottom: 12, fontSize: 14 }}>
        Technical writing on production AI systems — finance operations, and other domains where a wrong answer costs real money.
      </p>
      <p style={{ marginBottom: 64 }}>
        <a href="/blog/rss.xml" className="link-muted">RSS</a>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: 'none', display: 'block', padding: '32px 0', borderTop: '1px solid var(--border)' }}
          >
            <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', marginBottom: 12 }}>
              <span style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>{post.date}</span>
              <span style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>{post.readTime}</span>
            </div>
            <h2 style={{ fontSize: 18, fontWeight: 500, color: 'var(--text)', marginBottom: 10, lineHeight: 1.3 }}>
              {post.title}
            </h2>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
              {post.description}
            </p>
          </Link>
        ))}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 32 }} />
      </div>
    </div>
    <Footer />
    </>
  );
}
