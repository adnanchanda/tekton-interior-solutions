import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  });
  return [
    page("", 1),
    page("/products", 0.9),
    ...products.map((p) => page(`/products/${p.slug}`, 0.9)),
    page("/areas", 0.7),
    ...areas.map((a) => page(`/areas/${a.slug}`, 0.7)),
    page("/faq", 0.8),
    page("/about", 0.6),
    page("/contact", 0.8),
    page("/privacy-policy", 0.2),
  ];
}
