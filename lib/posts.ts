export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  description: string;
  readTime: string;
};

/** Published posts only. Drafts in drafts/blog/ are not listed here. */
export const posts: PostMeta[] = [
  {
    slug: 'ap-automation',
    title: 'How we achieve 99% AP automation without professional services',
    date: '3 October 2026',
    isoDate: '2026-10-03',
    description:
      'A technical account of how confidence gating, write-back loops, and hybrid retrieval produce a self-improving invoice coding system — without ongoing configuration or PS engagement.',
    readTime: '7 min read',
  },
];

export function postBySlug(slug: string) {
  return posts.find(post => post.slug === slug);
}
