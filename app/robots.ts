import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Search engines and AI assistants are all welcome: being quoted by them is
// the point of this site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
