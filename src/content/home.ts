export const homeContent = {
  hero: {
    tag: "ShreeGuru Leadership & Learning",
    heading: "Guiding Minds. Shaping Leaders.",
    body: "ShreeGuru Leadership & Learning is a strategic education and leadership consultancy dedicated to strengthening learning ecosystems and developing responsible academic leadership.",
    primaryCta: { label: "Explore Services", href: "/services" },
    trustCard: {
      title: "TRUST & VALUE",
      bullets: [
        "Clarity. Consistency. Principled leadership.",
        "Curriculum and school systems expertise",
        "Ethical, human-centred advisory approach",
        "Sustainable, long-term impact",
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
    body: "A strategic education and leadership consultancy dedicated to strengthening learning ecosystems and developing responsible academic leadership.",
    panelSubtitle: "Services in this category include:",
    panelCta: { label: "Begin a Conversation", href: "/contact" },
    categories: [
      {
        id: "academic-consultancy",
        title: "Academic & Educational Consultancy",
        icon: "book",
        blurb: "Curriculum, assessment, and academic systems designed for coherence and quality.",
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
        blurb: "Leadership clarity, decision-making, and routines that protect learning.",
        items: [
          "Role clarity and distributed leadership structures",
          "Leadership coaching and mentoring for teams",
          "Meeting rhythms and decision-making routines",
          "Change leadership and strategic planning support",
        ],
      },
      {
        id: "professional-learning",
        title: "Professional Learning for Educators",
        icon: "users",
        blurb: "Professional learning grounded in inquiry, evidence, and classroom practice.",
        items: [
          "Inquiry-based professional learning cycles",
          "Instructional coaching and feedback routines",
          "Workshop facilitation for teaching teams",
          "Assessment literacy and feedback practices",
        ],
      },
      {
        id: "institutional-advisory",
        title: "Institutional Advisory & Support",
        icon: "building",
        blurb: "Ongoing advisory partnerships that strengthen systems and sustain progress.",
        items: [
          "Institutional review and roadmap development",
          "Implementation support across cycles and terms",
          "Governance, policy, and documentation guidance",
          "Ongoing advisory check-ins and reflection reviews",
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
    body: "We partner with leaders and teams through a steady, human-centred process designed for clarity and follow-through.",
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
