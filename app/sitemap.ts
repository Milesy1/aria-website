import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aria.mileswaite.net';
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#capabilities`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/#ap-automation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/#rag`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#erp`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#fine-tuning`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#results`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#case-study`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
