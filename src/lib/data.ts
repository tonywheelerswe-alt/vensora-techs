import {
  BrainCircuit,
  ChartLine,
  Cloud,
  CodeXml,
  Gauge,
  Headset,
  Layers,
  Lock,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Users,
  Workflow,
  PenTool,
  Zap,
} from "lucide-react";

export const site = {
  name: "Vensora Tech",
  email: "hello@vensoratech.com",
  phone: "+1 (555) 014-2026",
  address: "New York, NY · Remote worldwide",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const rotatingWords = ["Cloud", "Security", "AI", "Software", "Growth"];

export const techStack = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Kubernetes",
  "Terraform",
  "OpenAI",
  "Salesforce",
  "Snowflake",
  "Docker",
  "Next.js",
  "Python",
  "ServiceNow",
];

export const stats = [
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 40, suffix: "%", label: "Avg. infra cost saved" },
  { value: 24, suffix: "/7", label: "Managed support" },
];

export const services = [
  {
    icon: Cloud,
    title: "Cloud Strategy & Migration",
    description:
      "Move to AWS, Azure, or GCP with zero-drama migrations, landing zones, and FinOps that keep your bill in check.",
    tags: ["AWS", "Azure", "GCP", "FinOps"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    description:
      "Zero-trust architecture, penetration testing, SOC 2 / ISO 27001 readiness, and 24/7 threat monitoring.",
    tags: ["Zero Trust", "SOC 2", "Pen Testing"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Solutions",
    description:
      "From data platforms to production-grade LLM copilots — we turn your data into decisions and automation.",
    tags: ["LLMs", "MLOps", "Analytics"],
  },
  {
    icon: CodeXml,
    title: "Custom Software Development",
    description:
      "Web, mobile, and enterprise apps engineered by senior teams with modern stacks and clean architecture.",
    tags: ["Web", "Mobile", "APIs"],
  },
  {
    icon: Server,
    title: "DevOps & Managed IT",
    description:
      "CI/CD pipelines, infrastructure as code, observability, and fully managed IT so your team can ship faster.",
    tags: ["Kubernetes", "Terraform", "SRE"],
  },
  {
    icon: ChartLine,
    title: "Digital Transformation",
    description:
      "Technology roadmaps, legacy modernization, and process automation aligned with measurable business outcomes.",
    tags: ["Roadmaps", "Automation", "ERP"],
  },
];

export const reasons = [
  {
    icon: Users,
    title: "Senior-only teams",
    description: "Every engagement is led by architects with 10+ years of hands-on experience.",
  },
  {
    icon: Zap,
    title: "Fast time-to-value",
    description: "Agile sprints and clear milestones mean you see results in weeks, not quarters.",
  },
  {
    icon: Lock,
    title: "Security by default",
    description: "Compliance and security are baked into every design decision from day one.",
  },
  {
    icon: Gauge,
    title: "Outcome-driven",
    description: "We tie our work to KPIs you care about — uptime, cost, revenue, and velocity.",
  },
  {
    icon: Layers,
    title: "Vendor-neutral",
    description: "We recommend what's right for you, not what pays us a partner commission.",
  },
  {
    icon: Headset,
    title: "Always-on support",
    description: "Dedicated success managers and 24/7 support with guaranteed SLAs.",
  },
];

export const processSteps = [
  {
    icon: Search,
    title: "Discover",
    description: "We audit your systems, interview stakeholders, and map goals to technical realities.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "A clear architecture and roadmap with costs, timelines, and risks spelled out.",
  },
  {
    icon: Workflow,
    title: "Build",
    description: "Iterative delivery in two-week sprints with demos, testing, and full transparency.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Smooth go-live, team enablement, and ongoing optimization as you grow.",
  },
];

export const projects = [
  {
    title: "Fintech Cloud Re-platform",
    category: "Cloud Migration",
    year: "2026",
    result: "62% lower infra cost",
    description:
      "Migrated 140+ services from on-prem to AWS with zero downtime, cutting deployment time from days to minutes.",
    gradient: "from-violet-600/40 via-indigo-500/20 to-transparent",
  },
  {
    title: "Healthcare AI Copilot",
    category: "AI & Data",
    year: "2026",
    result: "3.5x faster triage",
    description:
      "HIPAA-compliant LLM assistant helping clinicians summarize records and surface insights in seconds.",
    gradient: "from-cyan-500/40 via-sky-500/20 to-transparent",
  },
  {
    title: "Retail Zero-Trust Rollout",
    category: "Cybersecurity",
    year: "2025",
    result: "SOC 2 in 90 days",
    description:
      "Implemented zero-trust access across 300 stores and achieved SOC 2 Type II certification on the first attempt.",
    gradient: "from-pink-500/40 via-fuchsia-500/20 to-transparent",
  },
  {
    title: "Logistics Ops Platform",
    category: "Custom Software",
    year: "2025",
    result: "+28% fleet utilization",
    description:
      "Real-time dispatch and tracking platform with predictive routing, used by 2,000+ drivers daily.",
    gradient: "from-emerald-500/40 via-teal-500/20 to-transparent",
  },
];

export const testimonials = [
  {
    quote:
      "Vensora Tech migrated our entire stack to the cloud without a single minute of downtime. Our costs dropped and our team ships twice as fast.",
    name: "Sarah Mitchell",
    role: "CTO, Northwind Financial",
  },
  {
    quote:
      "Their security team got us SOC 2 ready in record time. Professional, proactive, and genuinely invested in our success.",
    name: "David Chen",
    role: "VP Engineering, ParcelPoint",
  },
  {
    quote:
      "The AI copilot they built is now used by every clinician on staff. It feels like having an extra team member on every shift.",
    name: "Dr. Amara Okafor",
    role: "CMIO, Lumen Health",
  },
  {
    quote:
      "Vensora is the rare consultancy that actually understands the business side. Every recommendation came with a clear ROI.",
    name: "James Rivera",
    role: "COO, Brightline Retail",
  },
];

export const faqs = [
  {
    q: "What size companies do you work with?",
    a: "We partner with fast-growing startups through mid-market and enterprise organizations. Our engagement models flex from a focused two-week assessment to multi-year managed services.",
  },
  {
    q: "How long does a typical project take?",
    a: "Assessments take 2–4 weeks. Most build or migration projects run 2–6 months depending on scope. We always deliver in milestones so you see value early.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer managed IT, DevOps, and security operations with 24/7 coverage and guaranteed SLAs, or we can train your internal team to take over.",
  },
  {
    q: "How do you price your services?",
    a: "We offer fixed-price projects for well-defined scopes, monthly retainers for ongoing work, and time-and-materials for exploratory initiatives. Every proposal includes transparent cost breakdowns.",
  },
  {
    q: "Can you work with our existing IT team?",
    a: "Absolutely. Most of our engagements are collaborative — we embed alongside your team, share knowledge, and leave you stronger than we found you.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "Financial services, healthcare, retail, logistics, and SaaS — but our cloud, security, and software practices apply across any industry.",
  },
];
