export const homeContent = {
  hero: {
    tag: "ShreeGuru Leadership & Learning",
    heading: "Guiding Minds. Shaping Leaders.",
    body: [
      "ShreeGuru Leadership & Learning is a strategic education and leadership consultancy dedicated to strengthening learning ecosystems and developing responsible academic leadership.",
      "We partner with schools and educational institutions to design robust academic systems, cultivate leadership capacity, and support sustainable institutional growth. Our work is grounded in experience, reflection, and a deep respect for the purpose of education.",
      "We believe enduring excellence is built not through shortcuts, but through clarity, consistency, and principled leadership.",
    ],
    primaryCta: { label: "Explore Services", href: "/services" },
    trustCard: {
      title: "TRUST & VALUE",
      bullets: [
        "Leadership grounded in experience and integrity",
        "Deep understanding of curriculum and school systems",
        "Thoughtful, human-centred advisory approach",
        "Practical guidance with strategic clarity",
        "Commitment to sustainable, long-term impact",
      ],
    },
    microHint: "Scroll to explore",
  },
  marquee: {
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
  services: {
    label: "SERVICES",
    title: "Services",
    body: "We partner with schools and educational institutions to design robust academic systems, cultivate leadership capacity, and support sustainable institutional growth.",
    panelSubtitle: "Services in this category include:",
    panelCta: { label: "Begin a Conversation", href: "/contact" },
    categories: [
      {
        id: "academic-consultancy",
        title: "Academic & Educational Consultancy",
        icon: "book",
        blurb: "Strengthening curriculum, assessment, and academic systems with coherence and quality.",
        items: [
          "Curriculum design, review, and alignment",
          "Academic structuring and quality enhancement",
          "Assessment systems review and academic audits",
          "Policy development and academic documentation",
        ],
      },
      {
        id: "leadership-development",
        title: "Leadership Development",
        icon: "compass",
        blurb: "Mentoring, programmes, and planning that build principled leadership capacity.",
        items: [
          "Mentoring and coaching for school leaders",
          "Leadership development programmes",
          "Strategic planning and institutional visioning",
          "Change management and academic transformation support",
        ],
      },
      {
        id: "professional-learning",
        title: "Professional Learning for Educators",
        icon: "users",
        blurb: "Professional learning that strengthens pedagogy, assessment, and reflective practice.",
        items: [
          "Pedagogical development and instructional practices",
          "Assessment literacy and feedback strategies",
          "Reflective practice routines",
          "Professional growth programmes",
        ],
      },
      {
        id: "institutional-advisory",
        title: "Institutional Advisory & Support",
        icon: "building",
        blurb: "Advisory support that strengthens institutional systems and sustainable growth.",
        items: [
          "Advisory support for new and growing institutions",
          "Review and inspection readiness",
          "Development of SOPs, handbooks, and planning frameworks",
          "Ongoing academic advisory and mentoring partnerships",
        ],
      },
    ],
  },
  about: {
    label: "ABOUT",
    title: "About",
    body: "ShreeGuru Leadership & Learning is a purpose-driven consultancy working at the intersection of education, leadership, and institutional development. Led by an experienced academic leader, our practice draws upon years of work within diverse school contexts. We bring together strategic thinking, operational understanding, and human insight to support institutions as they navigate change, growth, and complexity.",
    beliefsCard: {
      title: "BELIEFS",
      bullets: [
        "Effective leadership is the foundation of meaningful learning",
        "Strong institutions are shaped by clear systems and shared values",
        "Sustainable progress emerges from reflection, dialogue, and informed action",
      ],
    },
    link: { label: "Learn About Our Identity", href: "/about" },
  },
  approach: {
    label: "HOW WE WORK",
    title: "Approach",
    body: "We work as thought partners alongside institutions. Our approach is collaborative, ethical, and learner-centred — ensuring change is both thoughtful and lasting.",
    card: {
      bullets: [
        "Careful listening and contextual understanding",
        "Respect for institutional culture and identity",
        "Co-creation of practical, implementable strategies",
        "Continued support through reflection and implementation",
      ],
    },
  },
  resources: {
    label: "RESOURCES",
    title: "Resources",
    body: "Blogs, anonymised case studies, and impact notes.",
    cards: [
      {
        title: "Blogs: Clarity Before Speed",
        description: "Short reflections on leadership, coherence, and learning-centred systems.",
        href: "/resources/blogs",
        linkLabel: "Read blogs",
      },
      {
        title: "Case Studies: Engagement Summaries",
        description: "Professional anonymised case studies highlighting focus, routines, and outcomes.",
        href: "/resources/case-studies",
        linkLabel: "Explore case studies",
      },
      {
        title: "Impact: Patterns That Sustain Change",
        description: "Notes on what makes change stick through implementation and reflection cycles.",
        href: "/resources/impact",
        linkLabel: "Explore impact notes",
      },
    ],
    cta: { label: "Explore resources", href: "/resources" },
  },
  faqs: {
    label: "FAQS",
    title: "FAQs",
    items: [
      {
        question: "How do engagements typically begin?",
        answer:
          "We begin with a purposeful conversation to understand your context, priorities, and desired outcomes, followed by a clear scope and next steps.",
        defaultOpen: true,
      },
      {
        question: "Do you work with national and international schools?",
        answer:
          "Yes. We work with a range of national and international school contexts, adapting our approach to local realities and organisational needs.",
      },
      {
        question: "Can services be tailored to our context and culture?",
        answer:
          "Absolutely. Every engagement is shaped around your culture, values, and constraints so strategies are practical and implementable.",
      },
      {
        question: "Do you offer ongoing advisory partnerships?",
        answer:
          "Yes. We can support leaders over time through periodic reviews, coaching, and implementation check-ins to sustain progress.",
      },
    ],
  },
  begin: {
    title: "Begin a Conversation",
    body: "Begin a purposeful conversation. If you are seeking to strengthen leadership, refine learning systems, or bring clarity to your academic direction, we would be pleased to explore how we can support your journey.",
    primaryCta: { label: "Begin a Purposeful Conversation", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
} as const;
