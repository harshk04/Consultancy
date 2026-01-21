export type ResourceBase = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  body: string[];
};

export type BlogPost = ResourceBase & { kind: "blog" };
export type CaseStudy = ResourceBase & {
  kind: "case-study";
  context: string;
  focus: string[];
  outcomes: string[];
};
export type ImpactNote = ResourceBase & {
  kind: "impact";
  highlights: string[];
};

export const resourcesContent = {
  overview: {
    label: "RESOURCES",
    title: "Resources",
    intro:
      "A curated set of writings, anonymised case studies, and impact notes — designed to share practical thinking while respecting context, people, and institutional identity.",
    categories: [
      {
        label: "BLOGS",
        title: "Blogs",
        excerpt: "Short reflections on leadership, learning systems, and coherence in practice.",
        href: "/resources/blogs",
      },
      {
        label: "CASE STUDIES",
        title: "Case Studies",
        excerpt: "Professional anonymised engagement summaries and learnings.",
        href: "/resources/case-studies",
      },
      {
        label: "IMPACT",
        title: "Impact",
        excerpt: "Patterns, outcomes, and what sustainable change can look like over time.",
        href: "/resources/impact",
      },
    ],
  },
  blogs: {
    label: "BLOGS",
    title: "Blogs",
    intro:
      "Brief writing that translates strategic intent into practical steps — with an emphasis on clarity, ethics, and learning-centred leadership.",
  },
  caseStudies: {
    label: "CASE STUDIES",
    title: "Case Studies",
    intro: "Professional anonymised engagement summaries. Names and details are adapted to preserve confidentiality.",
  },
  impact: {
    label: "IMPACT",
    title: "Impact",
    intro:
      "Impact is rarely a single moment. It emerges through sustained implementation, reflection, and coherent routines. These notes highlight common patterns we see across institutions.",
  },
} as const;

export const blogPosts: readonly BlogPost[] = [
  {
    kind: "blog",
    slug: "clarity-before-speed",
    title: "Clarity Before Speed: A Leadership Habit That Protects Learning",
    excerpt:
      "In complex school environments, velocity can feel productive. But clarity — about purpose, roles, and routines — is often what creates sustainable momentum.",
    date: "2026-01-10",
    readTime: "4 min read",
    tags: ["Leadership", "Coherence", "Systems"],
    body: [
      "Schools move quickly. Timetables shift, staffing changes, initiatives compete, and urgent issues arrive without warning.",
      "In that pace, leaders can feel pressured to move fast — to fix, to respond, to deliver. Yet speed without clarity often creates rework: misaligned decisions, unclear roles, and inconsistent routines.",
      "Clarity begins with a simple practice: name the purpose, define the decision, and establish what “good” looks like in your context.",
      "From there, coherence follows: routines become stable, expectations become shared, and teams can focus their energy on learning rather than confusion.",
      "If you want momentum that lasts, start by slowing down just enough to be clear.",
    ],
  },
  {
    kind: "blog",
    slug: "building-coherence-through-routines",
    title: "Building Coherence Through Routines (Not Rules)",
    excerpt:
      "Routines are more than compliance. When designed well, they make good practice easier and protect time for learning.",
    date: "2025-12-18",
    readTime: "5 min read",
    tags: ["Systems", "School Culture", "Implementation"],
    body: [
      "Institutions often reach for rules when they want consistency. Rules can be necessary — but routines are usually more powerful.",
      "A routine is a repeated practice that makes expectations visible. It reduces friction and increases fairness: people know what happens, when it happens, and why it matters.",
      "Examples include: consistent assessment cycles, learning walks with clear focus, meeting agendas that prioritise learning, and reflection prompts that guide improvement.",
      "When routines are co-created with teams, they become shared commitments rather than imposed requirements.",
      "Coherence is not a document. It’s what people experience every week.",
    ],
  },
  {
    kind: "blog",
    slug: "ethical-advisory-work",
    title: "Ethical Advisory Work: What It Looks Like in Practice",
    excerpt:
      "An ethical advisory approach is transparent about limits, attentive to people, and committed to long-term capacity rather than dependency.",
    date: "2025-11-30",
    readTime: "6 min read",
    tags: ["Ethics", "Advisory", "Partnership"],
    body: [
      "Consultancy can easily become performative: polished outputs, short-term fixes, and advice that doesn’t live in the day-to-day reality of the institution.",
      "Ethical advisory work takes a different stance. It begins with listening, seeks to understand culture, and avoids simplistic solutions to complex challenges.",
      "It also holds boundaries: what we can and cannot claim, what evidence supports, and what timelines are realistic.",
      "Most importantly, it builds capability. The goal is not dependence on an external advisor — it is stronger leadership and clearer systems within the institution.",
      "Ethics is not an add-on. It is the method.",
    ],
  },
  {
    kind: "blog",
    slug: "reflection-as-a-system",
    title: "Reflection as a System: Making Improvement Sustainable",
    excerpt:
      "Reflection becomes powerful when it is designed as a system — with prompts, routines, and shared language that make learning visible.",
    date: "2025-10-22",
    readTime: "5 min read",
    tags: ["Reflection", "Professional Learning", "Culture"],
    body: [
      "Many organisations value reflection, but treat it as an individual habit rather than an institutional system.",
      "A reflective system includes: time, structure, shared prompts, and a culture where learning from practice is safe and expected.",
      "When leaders normalise reflective routines — after cycles, after key decisions, after learning initiatives — improvement becomes part of the organisation rather than an occasional project.",
      "Reflection is also an ethical act: it resists certainty, invites dialogue, and respects complexity.",
      "Sustainable progress is rarely about intensity. It is about rhythm.",
    ],
  },
] as const;

export const caseStudies: readonly CaseStudy[] = [
  {
    kind: "case-study",
    slug: "strengthening-academic-leadership",
    title: "Strengthening Academic Leadership",
    excerpt:
      "Clarifying roles and routines to build consistent academic decision-making and distributed leadership coherence.",
    date: "2025-12-05",
    readTime: "7 min read",
    tags: ["Leadership", "Structures", "Coherence"],
    context:
      "A growing school experienced inconsistent academic routines across teams, unclear role boundaries, and uneven decision-making rhythms.",
    focus: [
      "Role clarity and decision rights",
      "Meeting routines that prioritise learning",
      "Leadership coherence across departments",
    ],
    outcomes: ["Clear routines and decision pathways", "Improved alignment across teams", "Sustainable reflection cycles for leaders"],
    body: [
      "We began with a purposeful conversation and a short diagnostic: listening to leaders, reviewing routines, and mapping decision flows.",
      "Together, we clarified leadership roles and agreed decision rights for academic priorities. This reduced duplication and improved transparency.",
      "We designed meeting routines that protected time for learning: agenda templates, cycle planning, and evidence prompts.",
      "Leaders practised implementation through short cycles, followed by reflective reviews to adjust the routines to fit culture and context.",
      "The work concluded with a practical handbook of routines owned by the leadership team, with follow-up support scheduled across the term.",
    ],
  },
  {
    kind: "case-study",
    slug: "curriculum-assessment-alignment",
    title: "Curriculum & Assessment Alignment",
    excerpt:
      "Creating shared curriculum intent and practical assessment routines across departments to strengthen coherence.",
    date: "2025-11-12",
    readTime: "8 min read",
    tags: ["Curriculum", "Assessment", "Systems"],
    context:
      "Departments held strong practices individually, but curriculum intent and assessment expectations varied significantly across the school experience.",
    focus: ["Curriculum mapping and intent clarity", "Assessment routines and moderation", "Shared language for learning and feedback"],
    outcomes: ["Aligned intent and outcomes", "Consistent assessment routines", "Stronger cross-department collaboration"],
    body: [
      "We worked with middle leaders to surface existing practice and identify where misalignment was creating friction for students and teachers.",
      "Using a simple mapping structure, teams clarified intent, progressions, and what evidence of learning would look like across units.",
      "We introduced practical assessment routines: calibration, moderation prompts, and feedback principles aligned to the school’s values.",
      "Rather than adding more documents, the focus remained on implementable routines and small shared templates that reduced workload.",
      "Teams established a cycle for review and improvement, ensuring alignment became a living practice rather than a one-off project.",
    ],
  },
  {
    kind: "case-study",
    slug: "teacher-professional-growth",
    title: "Teacher Professional Growth",
    excerpt:
      "Designing sustainable professional learning cycles grounded in inquiry, classroom evidence, and reflective dialogue.",
    date: "2025-10-03",
    readTime: "7 min read",
    tags: ["Professional Learning", "Inquiry", "Culture"],
    context:
      "Professional learning was frequent but felt fragmented. Teachers wanted a clearer structure that connected learning to classroom practice.",
    focus: ["Inquiry cycles and shared prompts", "Observation and feedback routines", "Reflection structures for teams"],
    outcomes: ["A repeatable inquiry cycle", "Shared language and tools", "Improved coherence between PD and practice"],
    body: [
      "We co-designed an inquiry-based cycle with teachers and leaders, ensuring it fit timetables, culture, and workload realities.",
      "The cycle included clear prompts: a focus question, evidence collection, peer dialogue, and an implementation experiment.",
      "We supported teams to practise the cycle, refining tools over time to reduce friction and increase trust.",
      "Leaders established a rhythm for recognition and sharing, making professional learning visible and valued.",
      "The approach created a sustainable structure that teachers could continue without external dependence.",
    ],
  },
] as const;

export const impactNotes: readonly ImpactNote[] = [
  {
    kind: "impact",
    slug: "from-initiative-to-institution",
    title: "From Initiative to Institution: What Makes Change Stick",
    excerpt:
      "Sustainable change is less about launching new initiatives and more about creating repeatable routines, evidence habits, and shared decision logic.",
    date: "2026-01-02",
    readTime: "4 min read",
    tags: ["Implementation", "Sustainability"],
    highlights: ["Repeatable routines", "Clear decision rights", "Evidence-informed reflection"],
    body: [
      "When change fails, it is rarely because leaders did not care. It is often because the institution lacked repeatable structures that protected the change.",
      "Making change stick typically requires three things: a routine (what we do), an evidence habit (how we know), and a reflection rhythm (how we improve).",
      "If any of these are missing, change becomes personality-dependent and fades when pressure rises.",
      "Institutions do not need more intensity. They need more coherence.",
    ],
  },
  {
    kind: "impact",
    slug: "coherence-in-meeting-culture",
    title: "Coherence in Meeting Culture",
    excerpt:
      "Meeting culture is often the hidden curriculum of leadership: it reveals priorities and shapes what gets implemented.",
    date: "2025-12-22",
    readTime: "3 min read",
    tags: ["Leadership", "Routines"],
    highlights: ["Learning-first agendas", "Clear facilitation", "Action + reflection cycles"],
    body: [
      "Many teams meet regularly, yet leave with limited clarity on what changes next week.",
      "A coherent meeting culture protects time for learning, documents decisions clearly, and ensures actions are reviewed.",
      "Small shifts — agenda templates, evidence prompts, and end-of-meeting commitments — often generate significant impact.",
    ],
  },
  {
    kind: "impact",
    slug: "ethical-leadership-in-complexity",
    title: "Ethical Leadership in Complexity",
    excerpt:
      "Ethical leadership is not only about values statements. It is about decision-making processes that respect people, context, and uncertainty.",
    date: "2025-11-08",
    readTime: "4 min read",
    tags: ["Ethics", "Leadership"],
    highlights: ["Transparent trade-offs", "Dialogue before decisions", "Respect for context"],
    body: [
      "Complex contexts force trade-offs. Ethical leadership names those trade-offs openly and refuses false certainty.",
      "It also creates dialogue: bringing voices into decisions and clarifying how decisions will be reviewed over time.",
      "In practice, this means: clear decision criteria, documented rationale, and reflection after implementation.",
    ],
  },
] as const;

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug) ?? null;
}

export function getImpactNote(slug: string) {
  return impactNotes.find((n) => n.slug === slug) ?? null;
}

