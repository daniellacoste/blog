import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://daniellacoste.com/thoughts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/thoughts', '/guestbook', '/uses', '/work'].map((route) => ({
    url: `https://daniellacoste.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
