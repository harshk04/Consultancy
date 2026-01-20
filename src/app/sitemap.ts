import type { MetadataRoute } from "next";
import { caseStudies, serviceCategories, site } from "@/content/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = new Date();

  const routes = [
    "/",
    "/about",
    "/services",
    "/ib-world-schools",
    "/impact",
    "/founder",
    "/contact",
    ...serviceCategories.map((s) => `/services/${s.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
