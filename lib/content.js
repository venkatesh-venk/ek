// Central content for ESIKA INFOTECH — Banking & Aviation IT Consulting

export const company = {
  name: "ESIKA INFOTECH PVT LTD",
  short: "ESIKA INFOTECH",
  email: "info@esika.in",
  phone: "080 6897 0818",
  phoneHref: "+918068970818",
  website: "www.esika.in",
  address: {
    line1: "3rd Floor, Esares Building",
    line2: "80 Feet Road, Koramangala",
    city: "Bengaluru – 560034, India",
  },
};

export const stats = [
  { value: "15+", label: "Years in regulated industries" },
  { value: "40+", label: "Banking & airline clients" },
  { value: "200+", label: "Enterprise engagements" },
  { value: "99.9%", label: "Platform uptime delivered" },
];

export const heroSlides = [
  {
    id: "consulting",
    eyebrow: "Enterprise IT Consulting",
    titleBefore: "Enterprise IT consulting for ",
    titleHighlight: "banking & aviation",
    titleAfter: " leaders",
    text: "ESIKA INFOTECH partners with banks and airlines to modernize core systems, launch digital channels, and build secure, scalable technology platforms — from strategy through managed operations.",
    primaryCta: { href: "/contact", label: "Book a Consultation" },
    secondaryCta: { href: "/portfolio", label: "View Case Studies" },
    stat: { value: "15+", label: "Years in regulated industries" },
    visual: "dashboard",
  },
  {
    id: "banking",
    eyebrow: "Banking Systems",
    titleBefore: "Modernizing ",
    titleHighlight: "core banking",
    titleAfter: " for the digital era",
    text: "From core banking platforms to real-time payments and digital channels, we help financial institutions modernize with RBI compliance and audit-readiness built in from day one.",
    primaryCta: { href: "/portfolio", label: "See Banking Case Studies" },
    secondaryCta: { href: "/services", label: "Explore Services" },
    stat: { value: "40M+", label: "Accounts migrated" },
    visual: "banking",
  },
  {
    id: "aviation",
    eyebrow: "Aviation Systems",
    titleBefore: "Powering ",
    titleHighlight: "airline operations",
    titleAfter: " at scale",
    text: "Reservation systems, airport IT, crew management, and revenue optimization — we support carriers operating hundreds of daily flights with mission-critical reliability.",
    primaryCta: { href: "/portfolio", label: "See Aviation Case Studies" },
    secondaryCta: { href: "/services", label: "Explore Services" },
    stat: { value: "120+", label: "Daily flights supported" },
    visual: "aviation",
  },
  {
    id: "cloud",
    eyebrow: "Cloud & Intelligence",
    titleBefore: "Enterprise-ready ",
    titleHighlight: "cloud & data",
    titleAfter: " platforms",
    text: "Migrate to the cloud and unlock real-time analytics with security, compliance, and disaster recovery designed for banking and aviation workloads.",
    primaryCta: { href: "/contact", label: "Discuss Your Cloud Roadmap" },
    secondaryCta: { href: "/services", label: "Explore Services" },
    stat: { value: "35%", label: "Cloud cost reduction delivered" },
    visual: "cloud",
  },
];

export const industries = [
  {
    slug: "banking",
    icon: "🏦",
    title: "Banking & Financial Services",
    summary:
      "Core banking modernization, digital channels, payments, lending platforms, and regulatory compliance for retail, corporate, and investment banks.",
    highlights: [
      "Core banking & CBS integration",
      "Digital banking & mobile apps",
      "Payments, UPI & card systems",
      "Risk, fraud & AML platforms",
    ],
  },
  {
    slug: "airlines",
    icon: "✈",
    title: "Airlines & Aviation",
    summary:
      "Passenger experience, reservation systems, crew operations, revenue management, and airport IT for carriers and aviation enterprises.",
    highlights: [
      "PSS & booking engine integration",
      "Airport & ground operations IT",
      "Loyalty & revenue systems",
      "Crew scheduling & ops dashboards",
    ],
  },
];

export const services = [
  {
    slug: "digital-transformation",
    icon: "◆",
    title: "Digital Transformation Consulting",
    summary:
      "Strategy, roadmap, and execution for banks and airlines moving from legacy systems to modern, customer-centric digital platforms.",
    points: [
      "IT strategy & assessment",
      "Legacy modernization roadmaps",
      "Operating model design",
      "Change management",
    ],
  },
  {
    slug: "core-banking",
    icon: "▣",
    title: "Core Banking & Financial Systems",
    summary:
      "Implementation, integration, and optimization of core banking, lending, treasury, and payment platforms for regulated financial institutions.",
    points: [
      "CBS implementation & migration",
      "API & middleware integration",
      "Loan origination systems",
      "Regulatory reporting",
    ],
  },
  {
    slug: "cloud-devops",
    icon: "☁",
    title: "Cloud & Infrastructure",
    summary:
      "Secure cloud migration, hybrid architecture, and DevOps automation built for the uptime and compliance demands of banking and aviation.",
    points: [
      "AWS / Azure / GCP migration",
      "Kubernetes & container platforms",
      "Disaster recovery & HA",
      "Cost & performance optimization",
    ],
  },
  {
    slug: "data-ai",
    icon: "✦",
    title: "Data, Analytics & AI",
    summary:
      "Enterprise data platforms, real-time analytics, and applied AI for fraud detection, customer insights, and operational intelligence.",
    points: [
      "Data lake & warehouse builds",
      "Real-time dashboards & BI",
      "Fraud & risk analytics",
      "Predictive maintenance (aviation)",
    ],
  },
  {
    slug: "integration",
    icon: "⬡",
    title: "Integration & API Strategy",
    summary:
      "Connect core systems, third-party vendors, and partner ecosystems with robust API gateways, ESB, and event-driven architectures.",
    points: [
      "Enterprise service bus",
      "Open banking APIs",
      "Partner & vendor integration",
      "Event streaming (Kafka)",
    ],
  },
  {
    slug: "managed-services",
    icon: "◈",
    title: "Managed Services & Support",
    summary:
      "24/7 application support, SLA-driven operations, and proactive monitoring for mission-critical banking and airline systems.",
    points: [
      "L1–L3 application support",
      "24/7 NOC & incident response",
      "Security patching & compliance",
      "Capacity planning",
    ],
  },
];

export const platformFeatures = [
  {
    id: "consulting",
    eyebrow: "Strategic Consulting",
    title: "End-to-end IT consulting for regulated enterprises",
    description:
      "From assessment to execution, we partner with banks and airlines to modernize technology estates, reduce operational risk, and accelerate digital initiatives — without disrupting mission-critical operations.",
    bullets: [
      "Centralized program governance across multi-vendor landscapes",
      "Domain experts with deep banking & aviation experience",
      "Agile delivery with enterprise-grade quality gates",
    ],
    cta: { href: "/services", label: "Explore our services →" },
    visual: "dashboard",
  },
  {
    id: "banking-systems",
    eyebrow: "Banking Systems",
    title: "Modernize core banking and digital channels",
    description:
      "We help financial institutions upgrade core banking platforms, launch digital channels, and integrate payment rails — while maintaining RBI compliance, PCI-DSS standards, and audit readiness.",
    bullets: [
      "Core banking (Finacle, TCS BaNCS, Flexcube) integration",
      "Mobile & internet banking with biometric auth",
      "Real-time payments, UPI, and card processing",
    ],
    cta: { href: "/portfolio", label: "See banking case studies →" },
    visual: "banking",
    reverse: true,
  },
  {
    id: "aviation-systems",
    eyebrow: "Aviation Systems",
    title: "Passenger systems and airline operations at scale",
    description:
      "Support reservation platforms, airport systems, crew management, and revenue optimization for airlines operating across domestic and international routes.",
    bullets: [
      "PSS integration (Amadeus, Sabre, Navitaire)",
      "Airport check-in, DCS, and baggage systems",
      "Crew rostering and ops control dashboards",
    ],
    cta: { href: "/portfolio", label: "See aviation case studies →" },
    visual: "aviation",
  },
  {
    id: "cloud",
    eyebrow: "Cloud & Security",
    title: "Enterprise-ready cloud with built-in compliance",
    description:
      "Migrate workloads to the cloud with security, disaster recovery, and regulatory controls baked in from day one. We design for the resilience banking and aviation demand.",
    bullets: [
      "Hybrid & multi-cloud architecture",
      "SOC 2, ISO 27001 aligned practices",
      "Automated DR with RPO/RTO targets",
    ],
    cta: { href: "/contact", label: "Discuss your cloud roadmap →" },
    visual: "cloud",
    reverse: true,
  },
  {
    id: "data",
    eyebrow: "Data & Intelligence",
    title: "Turn enterprise data into actionable intelligence",
    description:
      "Build data platforms that power fraud detection, regulatory reporting, passenger analytics, and executive dashboards — with real-time pipelines and governed access.",
    bullets: [
      "Unified data platforms for banking & aviation",
      "Real-time fraud & anomaly detection",
      "Regulatory and MIS reporting automation",
    ],
    cta: { href: "/services", label: "Learn about data services →" },
    visual: "analytics",
  },
];

export const useCases = [
  {
    title: "Core Banking Modernization",
    industry: "Banking",
    text: "Migrate legacy CBS to modern platforms with zero downtime cutover strategies.",
  },
  {
    title: "Digital Banking Launch",
    industry: "Banking",
    text: "Mobile and internet banking with UPI, bill pay, and account opening workflows.",
  },
  {
    title: "Payment Hub Integration",
    industry: "Banking",
    text: "Real-time payment processing across IMPS, NEFT, RTGS, and card networks.",
  },
  {
    title: "Fraud & AML Platform",
    industry: "Banking",
    text: "ML-driven transaction monitoring and regulatory compliance reporting.",
  },
  {
    title: "PSS & Booking Integration",
    industry: "Airlines",
    text: "Connect reservation, inventory, and pricing across GDS and direct channels.",
  },
  {
    title: "Airport Operations IT",
    industry: "Airlines",
    text: "Check-in, boarding, baggage tracking, and ground handling system integration.",
  },
  {
    title: "Crew Management Systems",
    industry: "Airlines",
    text: "Rostering, training compliance, and ops control center dashboards.",
  },
  {
    title: "Loyalty & Revenue Analytics",
    industry: "Airlines",
    text: "Frequent flyer programs, ancillary revenue, and yield management insights.",
  },
  {
    title: "Cloud Migration",
    industry: "Both",
    text: "Lift-and-shift or re-platform to AWS/Azure with compliance controls.",
  },
  {
    title: "API & Open Banking",
    industry: "Banking",
    text: "Open banking APIs, partner ecosystems, and third-party fintech integration.",
  },
  {
    title: "Disaster Recovery",
    industry: "Both",
    text: "Automated failover, DR drills, and business continuity for critical systems.",
  },
  {
    title: "Managed Application Support",
    industry: "Both",
    text: "24/7 L2/L3 support with SLA-backed incident and problem management.",
  },
];

export const compliance = [
  { label: "ISO 27001 Aligned", desc: "Information security management practices" },
  { label: "PCI-DSS Ready", desc: "Payment card data protection standards" },
  { label: "RBI Compliant", desc: "Banking regulatory framework adherence" },
  { label: "SOC 2 Practices", desc: "Security, availability & confidentiality controls" },
  { label: "GDPR Aware", desc: "Data privacy for global passenger & customer data" },
  { label: "ITIL Framework", desc: "IT service management best practices" },
];

export const techStack = [
  "Java",
  "Spring Boot",
  ".NET",
  "Python",
  "React",
  "Angular",
  "AWS",
  "Azure",
  "Kubernetes",
  "Oracle",
  "PostgreSQL",
  "Kafka",
  "MuleSoft",
  "TIBCO",
  "Snowflake",
  "Power BI",
];

export const portfolio = [
  {
    title: "National Bank Digital Transformation",
    category: "Core Banking",
    tag: "Banking",
    text: "Led a 3-year CBS modernization program for a top-10 Indian bank — migrating 40M accounts with phased cutover and zero data loss.",
  },
  {
    title: "Regional Airline PSS Integration",
    category: "Aviation Systems",
    tag: "Airlines",
    text: "Integrated Amadeus PSS with airport DCS, loyalty, and revenue management for a carrier operating 120+ daily flights.",
  },
  {
    title: "Payment Hub & UPI Platform",
    category: "Payments",
    tag: "Banking",
    text: "Built a real-time payment hub processing 2M+ transactions daily across IMPS, UPI, and card rails with sub-200ms latency.",
  },
  {
    title: "Airline Ops Control Center",
    category: "Operations IT",
    tag: "Airlines",
    text: "Delivered a real-time ops dashboard integrating crew, fleet, weather, and ATC data for a full-service carrier.",
  },
  {
    title: "Open Banking API Gateway",
    category: "Integration",
    tag: "Banking",
    text: "Deployed an API gateway connecting 30+ fintech partners with OAuth 2.0, rate limiting, and audit logging.",
  },
  {
    title: "Cloud Migration — FinOps",
    category: "Cloud & DevOps",
    tag: "Both",
    text: "Migrated 200+ workloads to AWS for a banking group, reducing infra costs by 35% while improving DR readiness.",
  },
];

export const testimonials = [
  {
    quote:
      "ESIKA guided our core banking migration with exceptional discipline. They understood RBI compliance requirements and delivered on time despite the complexity.",
    name: "Rajesh Kumar",
    role: "CIO, National Private Bank",
  },
  {
    quote:
      "Their aviation team integrated our PSS, airport, and loyalty systems seamlessly. Passenger experience improved measurably within the first quarter.",
    name: "Meera Shah",
    role: "VP IT, Regional Airline",
  },
  {
    quote:
      "We needed a partner who could operate at enterprise scale with banking-grade security. ESIKA's managed services team has been rock-solid for two years.",
    name: "Arun Desai",
    role: "Head of Technology, Financial Services Group",
  },
];

export const values = [
  {
    title: "Domain Expertise",
    text: "Deep knowledge of banking regulations and aviation operations — not generic IT consulting.",
  },
  {
    title: "Regulatory Rigor",
    text: "Every solution designed with compliance, audit trails, and security controls from the start.",
  },
  {
    title: "Zero-Downtime Mindset",
    text: "Mission-critical systems demand careful planning. We never compromise availability.",
  },
  {
    title: "Long-Term Partnership",
    text: "We stay beyond go-live — supporting, optimizing, and evolving your platforms.",
  },
];

export const process = [
  {
    step: "01",
    title: "Assess",
    text: "Audit current systems, compliance gaps, and business priorities to define a clear transformation roadmap.",
  },
  {
    step: "02",
    title: "Architect",
    text: "Design target-state architecture with security, scalability, and regulatory requirements built in.",
  },
  {
    step: "03",
    title: "Deliver",
    text: "Agile execution with phased rollouts, rigorous testing, and stakeholder sign-off at every gate.",
  },
  {
    step: "04",
    title: "Operate",
    text: "Transition to managed support with SLAs, monitoring, and continuous improvement.",
  },
];

export const jobs = [
  {
    title: "Senior Banking Systems Consultant",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Banking Practice",
  },
  {
    title: "Aviation IT Consultant",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Aviation Practice",
  },
  {
    title: "Cloud & DevOps Architect",
    type: "Full-time",
    location: "Bengaluru / Remote",
    dept: "Platform",
  },
  {
    title: "Integration Engineer (MuleSoft/TIBCO)",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Integration",
  },
  {
    title: "Data Engineer — Financial Services",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Data & AI",
  },
  {
    title: "Application Support Lead (L2/L3)",
    type: "Full-time",
    location: "Bengaluru",
    dept: "Managed Services",
  },
];

export const perks = [
  "Work on mission-critical banking & aviation systems",
  "Hybrid & flexible hours",
  "Certification budget (AWS, Azure, ITIL)",
  "Health insurance for you & family",
  "Senior mentorship & clear growth paths",
  "Enterprise client exposure from day one",
];

export const clientLogos = [
  "National Bank",
  "SkyWings Air",
  "FinServe Group",
  "AeroConnect",
  "Trust Capital",
  "JetLine Airways",
];
