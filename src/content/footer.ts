import type { NavItem } from "@/content/navigation";
import { brand } from "@/content/brand";
import { headerNav } from "@/content/navigation";

function flattenNav(items: NavItem[]) {
  const out: NavItem[] = [];
  for (const item of items) {
    out.push({ label: item.label, href: item.href });
    if (item.children?.length) {
      for (const child of item.children) out.push(child);
    }
  }
  return out;
}

export const footerContent = {
  brand: {
    name: brand.fullName,
    tagline1: brand.tagline1,
    tagline2: brand.tagline2,
  },
  sitemap: [...flattenNav(headerNav), { label: "Contact", href: "/contact" }],
  contactLine: "Begin a purposeful conversation: hello@shreeguru.example",
  copyright: `© ${new Date().getFullYear()} ShreeGuru Leadership & Learning. All rights reserved.`,
};
