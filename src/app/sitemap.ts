import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    ...services.map(({ slug }) => ({ url: `${site.url}/servicios/${slug}` })),
  ];
}
