export const contactContent = {
  title: "Contact",
  intro:
    "Begin with a purposeful conversation. Share a little about your context and what you are hoping to strengthen — we will respond with clear next steps.",
  details: [
    { label: "Email", value: "hello@shreeguru.example" },
    { label: "Phone", value: "+00 0000 000 000" },
    { label: "Location", value: "Available for national and international engagements" },
  ],
  guidance: {
    label: "GUIDANCE",
    title: "What to Include",
    bullets: [
      "Your role and organisation context",
      "What you are hoping to strengthen (leadership, curriculum, systems, culture)",
      "Any timelines or constraints that matter",
      "Who should be involved in early conversations",
      "A preferred way to connect (email or call)",
    ],
    responseNote: "Typical response time: 2–3 working days. International engagements are welcome.",
  },
  form: {
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@example.com" },
      organisation: { label: "Organisation", placeholder: "School / organisation" },
      message: { label: "Message", placeholder: "Tell us about your context, priorities, and desired outcomes..." },
    },
    submitLabel: "Send message (UI only)",
    note: "This form is UI only (no backend).",
  },
} as const;
