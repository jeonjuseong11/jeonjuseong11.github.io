import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [siteUrl, `${siteUrl}/career`, ...projects.map((p) => `${siteUrl}/projects/${p.id}`)].map((url) => ({ url }));
}
