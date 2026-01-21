export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const headerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "IB World Schools", href: "/ib-world-schools" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Impact", href: "/resources/impact" },
    ],
  },
  { label: "Founder’s Message", href: "/founders-message" },
];

export const headerCta = {
  label: "Begin a Conversation",
  href: "/contact",
};
