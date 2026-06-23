// Centralised portfolio content. Edit values here to update the site.
// All placeholders are intentionally generic — replace with your own.

export const profile = {
  name: "PRANAV PN",
  initials: "ΠΠ",
  role: "Aspiring Software Engineer",
  location: "VIT Chennai · India",
  tagline:
    "B.Tech undergraduate sculpting code into form. Second-year student of computer science, apprenticed to the craft of software.",
  shortBio:
    "I am Pranav — a second-year B.Tech student at VIT Chennai, fascinated by the architecture beneath modern software. I study systems the way the ancients studied stone: patiently, and with intent. My work explores web engineering, algorithms, and the quiet art of writing code that endures.",
  resumeUrl: "#",
  email: "pranav.pn@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Twitter", href: "https://x.com/" },
    { label: "Email", href: "mailto:pranav.pn@example.com" },
  ],
};

export const stats = [
  { value: "2nd", label: "Year of Study" },
  { value: "12+", label: "Projects Sculpted" },
  { value: "8.9", label: "Current CGPA" },
  { value: "∞", label: "Curiosity" },
];

export const projects = [
  {
    id: "p1",
    title: "Athena",
    subtitle: "An AI-assisted study companion",
    year: "2025",
    tags: ["React", "FastAPI", "LLM"],
    description:
      "A scholarly companion that distils dense lecture notes into structured study plans. Built end-to-end with a Python backend and a React interface.",
    image:
      "https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "p2",
    title: "Hermes",
    subtitle: "Low-latency messaging prototype",
    year: "2024",
    tags: ["Go", "WebSockets", "Redis"],
    description:
      "Experiments in real-time message delivery — a sandbox for studying back-pressure, fan-out, and graceful degradation.",
    image:
      "https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZ3JlZWslMjBhcmNoaXRlY3R1cmUlMjBjb2x1bW58ZW58MHx8fHwxNzc4ODY0MjIzfDA&ixlib=rb-4.1.0&q=85",
    href: "#",
  },
  {
    id: "p3",
    title: "Cartographer",
    subtitle: "Campus navigation, reimagined",
    year: "2024",
    tags: ["TypeScript", "Mapbox"],
    description:
      "An indoor + outdoor wayfinding system for VIT Chennai, tuned for first-year students who don't yet know their bearings.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "p4",
    title: "Marble Press",
    subtitle: "A minimalist publishing engine",
    year: "2023",
    tags: ["Next.js", "MDX"],
    description:
      "A static-first publishing platform with a typographic aesthetic borrowed from classical print.",
    image:
      "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMHRleHR1cmV8ZW58MHx8fHwxNzc4ODY0MjIzfDA&ixlib=rb-4.1.0&q=85",
    href: "#",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Go"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["FastAPI", "Node.js", "Express", "REST", "GraphQL"] },
  { group: "Data", items: ["MongoDB", "PostgreSQL", "Redis", "SQL"] },
  { group: "Tooling", items: ["Git", "Docker", "Linux", "Vercel", "AWS basics"] },
];

export const experience = [
  {
    year: "2025",
    title: "Open Source Contributor",
    place: "Various Repositories",
    body: "Contributing small but useful patches — documentation, tests, occasional features — to projects I admire.",
  },
  {
    year: "2024 — 25",
    title: "Technical Lead, Coding Club",
    place: "VIT Chennai",
    body: "Mentored juniors through introductory algorithms and full-stack workshops; organised internal hackathons.",
  },
  {
    year: "2024",
    title: "Summer Self-Study",
    place: "Independent",
    body: "Worked through systems design fundamentals, building toy implementations of caches, schedulers, and key-value stores.",
  },
  {
    year: "2023",
    title: "B.Tech, Computer Science",
    place: "VIT Chennai — Class of 2027",
    body: "Began formal studies in computer science with a focus on software engineering and algorithms.",
  },
];

export const testimonials = [
  {
    quote:
      "Pranav writes code the way good masons lay stone — patient, square, and built to last.",
    name: "Faculty Mentor",
    role: "Department of CS, VIT Chennai",
  },
  {
    quote:
      "A rare combination of curiosity and follow-through. He ships, then he reflects, then he ships again.",
    name: "Project Collaborator",
    role: "Hackathon Teammate",
  },
  {
    quote:
      "Calm under pressure during demo day. Asked sharper questions than most second-years I've seen.",
    name: "Industry Reviewer",
    role: "Guest Judge",
  },
];
