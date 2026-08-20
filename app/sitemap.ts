import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/service-pages";
import { blogPosts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://terrascapeslv.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `https://terrascapeslv.com/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: "https://terrascapeslv.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...blogPosts.map((post) => ({
      url: `https://terrascapeslv.com/blog/${post.slug}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
