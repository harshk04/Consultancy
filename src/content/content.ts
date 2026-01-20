export type NavItem = { label: string; href: string };

export type Slug = string;

export type IconKey =
  | "BadgeCheck"
  | "BookOpen"
  | "Building2"
  | "Compass"
  | "GraduationCap"
  | "Landmark"
  | "Users";

export type ServiceCategory = {
  title: string;
  icon: IconKey;
  summary?: string;
  items: string[];
};

export type CaseStudy = {
  title: string;
  context: string;
  ourWork: string[];
  impact: string[];
};

export type ServiceCategoryWithSlug = ServiceCategory & { slug: Slug };
export type CaseStudyWithSlug = CaseStudy & { slug: Slug };

export function slugify(input: string): Slug {
  return input
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function withUniqueSlugs<T extends { title: string }>(items: T[]) {
  const used = new Map<string, number>();
  return items.map((item) => {
    const base = slugify(item.title);
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    const slug = count === 0 ? base : `${base}-${count + 1}`;
    return { ...item, slug };
  });
}

export const site = {
  name: "ShreeGuru Leadership & Learning",
  tagline: "Guiding Minds. Shaping Leaders.",
  positioning:
    "A strategic education and leadership consultancy dedicated to strengthening learning ecosystems and developing responsible academic leadership.",
  brandLine: "Learn. Lead. Inspire.",
  contactPlaceholders: {
    email: "__________",
    phone: "__________",
    location: "__________",
  },
  url: "https://example.com",
} as const;

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "IB World Schools", href: "/ib-world-schools" },
  { label: "Impact / Case Studies", href: "/impact" },
  { label: "Founder’s Message", href: "/founder" },
  { label: "Contact", href: "/contact" },
];

export const home = {
  hero: {
    heading: "Guiding Minds. Shaping Leaders.",
    subheading:
      "ShreeGuru Leadership & Learning is a strategic education and leadership consultancy dedicated to strengthening learning ecosystems and developing responsible academic leadership.",
    primaryCta: { label: "Begin a Purposeful Conversation", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/#services" },
    trustStrip: [
      "Clarity. Consistency. Principled leadership.",
      "Curriculum and school systems expertise",
      "Ethical, human-centred advisory approach",
      "Sustainable, long-term impact",
    ],
  },
  aboutSnapshot: {
    heading: "About",
    body:
      "ShreeGuru Leadership & Learning is a purpose-driven consultancy working at the intersection of education, leadership, and institutional development. Led by an experienced academic leader, our practice draws upon years of work within diverse school contexts. We bring together strategic thinking, operational understanding, and human insight to support institutions as they navigate change, growth, and complexity.",
    beliefsHeading: "Beliefs",
    beliefs: [
      "Effective leadership is the foundation of meaningful learning",
      "Strong institutions are shaped by clear systems and shared values",
      "Sustainable progress emerges from reflection, dialogue, and informed action",
    ],
    cta: { label: "Learn About Our Identity", href: "/about" },
  },
  servicesOverview: {
    heading: "Services",
    categories: [
      {
        title: "Academic & Educational Consultancy",
        icon: "GraduationCap",
      },
      {
        title: "Leadership Development",
        icon: "Compass",
      },
      {
        title: "Professional Learning for Educators",
        icon: "Users",
      },
      {
        title: "Institutional Advisory & Support",
        icon: "Building2",
      },
    ],
    cta: { label: "Explore Services", href: "/services" },
  },
  approach: {
    heading: "Approach",
    points: [
      "Careful listening and contextual understanding",
      "Respect for institutional culture and identity",
      "Co-creation of practical, implementable strategies",
      "Continued support through reflection and implementation",
    ],
  },
  whoWeWorkWith: {
    heading: "Who We Work With",
    items: [
      "National and international schools",
      "School leadership and governance teams",
      "Educators and academic coordinators",
      "Educational organisations, trusts, and networks",
    ],
  },
  whyShreeGuru: {
    heading: "Why ShreeGuru",
    items: [
      "Leadership grounded in experience and integrity",
      "Deep understanding of curriculum and school systems",
      "Thoughtful, human-centred advisory approach",
      "Practical guidance with strategic clarity",
      "Commitment to sustainable, long-term impact",
    ],
  },
  testimonials: {
    heading: "Testimonials",
    items: ["Coming soon"],
  },
  valuesStrip: {
    items: [
      "Clarity",
      "Integrity",
      "Coherence",
      "Reflection",
      "Ethical leadership",
      "Learning-centred systems",
      "Purpose",
      "Dialogue",
      "Sustainability",
    ],
  },
  stats: {
    heading: "Impact Indicators",
    items: [
      { label: "Systems strengthened", value: null, note: "Coming soon" },
      { label: "Leaders mentored", value: null, note: "Coming soon" },
      { label: "Educator learning sessions", value: null, note: "Coming soon" },
      { label: "Institutional partnerships", value: null, note: "Coming soon" },
    ],
  },
  faq: {
    heading: "FAQs",
    items: [
      {
        q: "How do engagements typically begin?",
        a: "We begin with a purposeful conversation to understand your context, priorities, and desired outcomes, followed by a clear scope and next steps.",
      },
      {
        q: "Do you work with national and international schools?",
        a: "Yes. We work with national and international schools, leadership teams, educators, and educational organisations.",
      },
      {
        q: "Can services be tailored to our context and culture?",
        a: "Yes. Our approach is grounded in careful listening, respect for institutional identity, and co-creation of practical strategies.",
      },
      {
        q: "Do you offer ongoing advisory partnerships?",
        a: "Yes. Continued support through reflection and implementation is available through ongoing academic advisory and mentoring partnerships.",
      },
    ],
  },
  ctaBand: {
    body:
      "Begin a purposeful conversation. If you are seeking to strengthen leadership, refine learning systems, or bring clarity to your academic direction, we would be pleased to explore how we can support your journey.",
    cta: { label: "Begin a Conversation", href: "/contact" },
  },
} as const;

export const aboutPage = {
  title: "About",
  identityHeading: "Our Identity",
  identityBody: home.aboutSnapshot.body,
  beliefsHeading: "Our Belief",
  beliefs: home.aboutSnapshot.beliefs,
  visionHeading: "Vision",
  vision:
    "To contribute to educational environments where learning is purposeful, leadership is principled, and institutional growth is sustainable.",
  missionHeading: "Mission",
  mission: [
    "To guide academic leaders with insight, integrity, and perspective",
    "To strengthen teaching, learning, and assessment practices",
    "To support institutions in building coherent and effective academic systems",
    "To nurture leadership that serves learners, educators, and the wider community",
  ],
  cta: { heading: "Begin a Conversation", body: home.ctaBand.body, href: "/contact" },
} as const;

export const servicesPage = {
  title: "Services",
  categories: [
    {
      title: "Academic & Educational Consultancy",
      icon: "BookOpen",
      items: [
        "Curriculum design, review, and alignment",
        "Academic structuring and quality enhancement",
        "Assessment systems review and academic audits",
        "Policy development and academic documentation",
      ],
    },
    {
      title: "Leadership Development",
      icon: "Compass",
      items: [
        "Mentoring and coaching for school leaders",
        "Leadership development programmes",
        "Strategic planning and institutional visioning",
        "Change management and academic transformation support",
      ],
    },
    {
      title: "Professional Learning for Educators",
      icon: "Users",
      items: [
        "Pedagogical development and instructional practices",
        "Assessment literacy and feedback strategies",
        "Reflective practice and professional growth programmes",
      ],
    },
    {
      title: "Institutional Advisory & Support",
      icon: "Building2",
      items: [
        "Advisory support for new and growing institutions",
        "Review and inspection readiness",
        "Development of SOPs, handbooks, and planning frameworks",
        "Ongoing academic advisory and mentoring partnerships",
      ],
    },
  ] satisfies ServiceCategory[],
  cta: { heading: "Begin a Conversation", body: home.ctaBand.body, href: "/contact" },
} as const;

export const serviceCategories = withUniqueSlugs(
  servicesPage.categories.map((c) => ({ ...c })),
) satisfies ServiceCategoryWithSlug[];

export const servicesBySlug = Object.fromEntries(
  serviceCategories.map((c) => [c.slug, c]),
) as Record<Slug, ServiceCategoryWithSlug>;

export const ibWorldSchoolsPage = {
  title: "IB-Focused Academic & Leadership Services",
  intro:
    "ShreeGuru Leadership & Learning works closely with IB World Schools to support alignment with the IB philosophy, standards, and practices, while respecting each school’s unique context and identity.",
  sections: [
    {
      title: "IB Leadership Support",
      icon: "Landmark",
      items: [
        "Mentoring for Heads of School, Principals, and Coordinators",
        "Support in developing distributive and reflective leadership",
        "Guidance in leading IB programme growth and change",
        "Strategic planning aligned with IB values and mission",
      ],
    },
    {
      title: "Teaching & Learning in IB Contexts",
      icon: "GraduationCap",
      items: [
        "Curriculum alignment with IB frameworks and philosophy",
        "Support for inquiry-based teaching and learning",
        "Assessment literacy aligned with IB principles",
        "Teacher professional development workshops",
      ],
    },
    {
      title: "IB Programme Review & Readiness",
      icon: "BadgeCheck",
      items: [
        "Programme self-study guidance",
        "Review readiness support and documentation review",
        "Reflection on standards, practices, and evidence alignment",
        "Leadership and staff preparation for programme evaluation",
      ],
    },
    {
      title: "IB Culture & School Development",
      icon: "Compass",
      items: [
        "Strengthening learner profile integration",
        "Supporting international-mindedness in school culture",
        "Academic policy development aligned with IB expectations",
      ],
    },
  ],
  cta: { heading: "Begin a Conversation", body: home.ctaBand.body, href: "/contact" },
} as const;

export const impactPage = {
  title: "Impact / Case Studies",
  caseStudies: [
    {
      title: "Case Study 1: Strengthening Academic Leadership",
      context:
        "A growing school required clarity in leadership roles and academic direction following expansion.",
      ourWork: [
        "Leadership mentoring for senior academic team",
        "Review of academic structures and communication systems",
        "Support in defining roles, responsibilities, and processes",
      ],
      impact: [
        "Improved leadership coherence",
        "Clearer decision-making structures",
        "Stronger alignment between vision and daily practice",
      ],
    },
    {
      title: "Case Study 2: Curriculum & Assessment Alignment",
      context:
        "An international school sought to improve consistency in curriculum planning and assessment practices.",
      ourWork: [
        "Curriculum review and alignment support",
        "Assessment literacy sessions for teachers",
        "Development of shared planning and reflection tools",
      ],
      impact: [
        "Greater curriculum coherence",
        "Improved teacher confidence in assessment practices",
        "Enhanced learning consistency across grades",
      ],
    },
    {
      title: "Case Study 3: Teacher Professional Growth",
      context:
        "A school aimed to strengthen reflective teaching practices and professional culture.",
      ourWork: [
        "Professional learning workshops",
        "Ongoing mentoring and reflective dialogue",
        "Support in developing professional learning communities",
      ],
      impact: [
        "Increased professional engagement",
        "Stronger collaborative culture",
        "Sustainable improvement in classroom practice",
      ],
    },
  ] satisfies CaseStudy[],
  cta: { heading: "Begin a Conversation", body: home.ctaBand.body, href: "/contact" },
} as const;

export const caseStudies = withUniqueSlugs(
  impactPage.caseStudies.map((c) => ({ ...c })),
) satisfies CaseStudyWithSlug[];

export const caseStudiesBySlug = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c]),
) as Record<Slug, CaseStudyWithSlug>;

export const founderPage = {
  title: "Founder’s Message",
  heading: "Founder’s Message",
  body: [
    "Education has always been more than systems, structures, or outcomes. At its heart, it is a human endeavour—shaped by relationships, guided by values, and sustained by thoughtful leadership.",
    "Over the years, my work across diverse educational contexts has reinforced one enduring truth: strong institutions are built when leadership listens, reflects, and acts with purpose. Sustainable excellence does not emerge from pressure or compliance alone, but from clarity of vision, integrity of practice, and respect for the people within the system.",
    "ShreeGuru Leadership & Learning was established to support schools and academic leaders in navigating complexity with confidence. Our role is not to impose solutions, but to walk alongside institutions as a thinking partner—helping them strengthen learning cultures, align systems, and develop leadership capacity that serves both present needs and future aspirations.",
    "We believe that leadership in education carries responsibility beyond results. It shapes character, culture, and community. Our commitment is to guide this responsibility with wisdom, humility, and professional rigour.",
    "I invite you to engage with ShreeGuru Leadership & Learning as a space for reflection, growth, and purposeful transformation.",
  ],
  signature: "— Founder, ShreeGuru Leadership & Learning",
  cta: { heading: "Begin a Conversation", body: home.ctaBand.body, href: "/contact" },
} as const;

export const contactPage = {
  title: "Contact",
  intro: "Begin a purposeful conversation.",
  detailsHeading: "Contact details",
  formHeading: "Send a message",
} as const;
