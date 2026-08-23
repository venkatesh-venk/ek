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
    slug: "senior-banking-systems-consultant",
    title: "Senior Banking Systems Consultant",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Banking Practice",
    summary:
      "Lead implementation and support engagements for core banking, payments, and digital channel platforms at our banking clients — from requirements through go-live.",
    responsibilities: [
      "Own client-facing delivery for core banking / payments modules across the full project lifecycle",
      "Translate business requirements from banking stakeholders into technical specifications",
      "Guide a team of engineers on configuration, customization, integration, and testing",
      "Run fit-gap analysis against core banking platforms and recommend configuration approaches",
      "Plan and execute data migration and reconciliation activities for core banking cutovers",
      "Run UAT cycles, manage defect triage, and sign off releases with business stakeholders",
      "Lead production cutover planning, go-live support, and post-launch hypercare",
      "Coach junior consultants and review their configuration and documentation work",
    ],
    requirements: [
      "8+ years in core banking systems (Finacle, Flexcube, Temenos, or similar)",
      "Experience with payments, retail banking, or digital channel platforms",
      "Hands-on experience with at least one full core banking implementation or migration",
      "Working knowledge of banking regulatory and compliance requirements (RBI guidelines a plus)",
      "Strong stakeholder management and executive communication skills with banking clients",
      "Comfortable leading a small team and owning delivery outcomes independently",
      "Based in or willing to relocate to Bengaluru; hybrid work model",
    ],
    niceToHave: [
      "Prior experience with Finacle or Flexcube upgrade programs",
      "Exposure to UPI, NEFT/RTGS, or card payment switch integrations",
      "Certification in a core banking or ITIL framework",
    ],
  },
  {
    slug: "aviation-it-consultant",
    title: "Aviation IT Consultant",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Aviation Practice",
    summary:
      "Support reservation systems, airport IT, and crew management platforms for airline clients operating hundreds of daily flights.",
    responsibilities: [
      "Configure and support airline reservation (PSS), DCS, and crew management systems",
      "Work directly with airline ops and IT teams to troubleshoot mission-critical incidents",
      "Contribute to revenue optimization, scheduling, and inventory management system rollouts",
      "Support airport IT systems including check-in, baggage, and boarding gate applications",
      "Analyze flight operations data to identify recurring issues and propose fixes",
      "Document runbooks, SOPs, and support processes for 24/7 airline operations",
      "Participate in on-call rotations during peak travel periods and irregular operations",
      "Coordinate with third-party vendors (GDS, PSS providers) on integration issues",
    ],
    requirements: [
      "4+ years in aviation IT — PSS, DCS, crew management, or airport systems",
      "Comfortable working with mission-critical, high-availability, 24/7 systems",
      "Strong troubleshooting and incident-management skills under time pressure",
      "Understanding of airline operational workflows (check-in, boarding, irregular ops)",
      "Ability to work with cross-functional airline stakeholders under tight SLAs",
      "Based in or willing to relocate to Bengaluru; hybrid work model",
    ],
    niceToHave: [
      "Experience with a major GDS or PSS platform (Amadeus, Sabre, SITA)",
      "Knowledge of IATA standards and airline interline agreements",
      "Prior on-call experience supporting airline operations",
    ],
  },
  {
    slug: "cloud-devops-architect",
    title: "Cloud & DevOps Architect",
    type: "Full-time",
    location: "Bengaluru / Remote",
    dept: "Platform",
    summary:
      "Design and own cloud infrastructure and CI/CD platforms that host our banking and aviation client workloads.",
    responsibilities: [
      "Architect cloud landing zones on AWS/Azure for regulated banking and aviation workloads",
      "Build and maintain CI/CD pipelines, infrastructure-as-code (Terraform), and observability tooling",
      "Define security, compliance, and cost-optimization standards across client environments",
      "Design disaster recovery and high-availability architectures for mission-critical systems",
      "Lead cloud migration assessments and execute lift-and-shift or re-architecture projects",
      "Review infrastructure designs from engineering teams and enforce architectural guardrails",
      "Mentor engineers on cloud, containerization, and DevOps best practices",
      "Partner with security and compliance teams on audits and certifications",
    ],
    requirements: [
      "6+ years in cloud architecture / DevOps, ideally in regulated industries",
      "Hands-on with AWS or Azure, Terraform, Kubernetes, and CI/CD tooling (Jenkins, GitHub Actions, or similar)",
      "Experience designing for high availability, disaster recovery, and compliance requirements",
      "Strong understanding of networking, IAM, and cloud security best practices",
      "AWS/Azure certification preferred (Solutions Architect or equivalent)",
      "Remote-friendly; occasional travel to Bengaluru office",
    ],
    niceToHave: [
      "Experience in banking or aviation regulatory environments (PCI-DSS, RBI, DGCA)",
      "Multi-cloud or hybrid-cloud architecture experience",
      "Contributions to internal platform or developer-experience tooling",
    ],
  },
  {
    slug: "integration-engineer-mulesoft-tibco",
    title: "Integration Engineer (MuleSoft/TIBCO)",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Integration",
    summary:
      "Build and maintain integration flows connecting core banking and airline systems to partner and internal platforms.",
    responsibilities: [
      "Design, build, and support MuleSoft/TIBCO integration flows and APIs",
      "Integrate core banking or airline systems with third-party and internal services",
      "Design API specifications, data mappings, and error-handling strategies",
      "Monitor and troubleshoot production integration pipelines to meet uptime SLAs",
      "Optimize integration performance for high-volume banking and airline transaction flows",
      "Document interface specifications, data mappings, and integration architecture",
      "Collaborate with client integration teams on API governance and versioning",
    ],
    requirements: [
      "3+ years building integrations with MuleSoft, TIBCO, or similar iPaaS tools",
      "Solid understanding of REST/SOAP APIs, messaging queues (Kafka/JMS), and data formats (JSON, XML)",
      "Experience troubleshooting high-throughput, low-latency integration flows",
      "Familiarity with API security patterns (OAuth2, mTLS)",
      "Experience in banking or aviation integration a plus",
      "Based in or willing to relocate to Bengaluru; hybrid work model",
    ],
    niceToHave: [
      "MuleSoft or TIBCO certification",
      "Experience with core banking or airline PSS integration",
      "Exposure to event-driven architecture and Kafka",
    ],
  },
  {
    slug: "data-engineer-financial-services",
    title: "Data Engineer — Financial Services",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Data & AI",
    summary:
      "Build data pipelines and analytics platforms that power reporting, risk, and revenue-optimization use cases for banking and airline clients.",
    responsibilities: [
      "Design and maintain ETL/ELT pipelines for banking and aviation data sources",
      "Build data models supporting regulatory reporting, risk, and analytics dashboards",
      "Partner with client data teams on data quality, lineage, and governance",
      "Optimize pipeline performance and cost on cloud data platforms (Snowflake, BigQuery, Redshift)",
      "Implement data validation, monitoring, and alerting for critical data pipelines",
      "Support BI and analytics teams with clean, well-modeled datasets",
      "Ensure data handling practices meet banking and aviation compliance requirements",
    ],
    requirements: [
      "4+ years in data engineering with SQL, Python, and a cloud data warehouse",
      "Experience with orchestration tools (Airflow or similar)",
      "Understanding of data modeling techniques for reporting and analytics use cases",
      "Familiarity with data governance and compliance in regulated industries",
      "Financial services or aviation data experience preferred",
      "Based in or willing to relocate to Bengaluru; hybrid work model",
    ],
    niceToHave: [
      "Experience with dbt or similar transformation frameworks",
      "Exposure to real-time streaming pipelines (Kafka, Kinesis)",
      "Familiarity with regulatory reporting frameworks in banking",
    ],
  },
  {
    slug: "application-support-lead-l2-l3",
    title: "Application Support Lead (L2/L3)",
    type: "Full-time",
    location: "Bengaluru",
    dept: "Managed Services",
    summary:
      "Lead L2/L3 application support for banking and aviation platforms under our managed services engagements, ensuring mission-critical uptime.",
    responsibilities: [
      "Lead L2/L3 triage, root-cause analysis, and resolution for production incidents",
      "Own SLA/SLO tracking and escalation management across support engagements",
      "Coordinate with client teams and internal engineering on recurring issues and problem management",
      "Build and refine monitoring, alerting, and support documentation",
      "Run daily stand-ups and shift handovers across a 24/7 support team",
      "Drive root-cause analysis and preventive action plans for repeat incidents",
      "Report support metrics and trends to client stakeholders on a regular cadence",
      "Plan and execute support-team staffing, on-call schedules, and training",
    ],
    requirements: [
      "5+ years in application support for enterprise systems, ideally banking or aviation",
      "Strong incident-management and root-cause-analysis skills",
      "Experience with ITIL processes and on-call rotations",
      "Comfortable leading a support team and managing client escalations directly",
      "Familiarity with monitoring/ITSM tooling (ServiceNow, Jira Service Management, or similar)",
      "Based in Bengaluru; on-site presence required",
    ],
    niceToHave: [
      "ITIL Foundation certification",
      "Experience supporting core banking or airline reservation systems",
      "Exposure to automation for reducing manual support toil",
    ],
  },
  {
    slug: "qa-automation-lead",
    title: "QA Automation Lead",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Quality Engineering",
    summary:
      "Own test strategy and automation for core banking and aviation platform releases, keeping mission-critical systems reliable through every deployment.",
    responsibilities: [
      "Define test strategy and build automation frameworks for banking and aviation releases",
      "Lead functional, regression, integration, and performance testing across projects",
      "Integrate automated test suites into CI/CD pipelines for continuous quality gates",
      "Design test data strategies for regulated banking and aviation environments",
      "Mentor QA engineers on automation practices and code quality",
      "Report quality metrics, defect trends, and release-readiness to client stakeholders",
      "Collaborate with engineering and product teams to shift testing left in the SDLC",
    ],
    requirements: [
      "6+ years in QA with 3+ years leading automation efforts",
      "Hands-on with Selenium/Playwright, API testing, and CI/CD integration",
      "Experience designing test strategies for complex, integration-heavy systems",
      "Strong understanding of test data management in regulated environments",
      "Experience testing enterprise banking or aviation systems preferred",
      "Based in or willing to relocate to Bengaluru; hybrid work model",
    ],
    niceToHave: [
      "ISTQB certification",
      "Performance testing experience (JMeter, Gatling)",
      "Experience with contract or API testing frameworks (Pact, Postman/Newman)",
    ],
  },
  {
    slug: "business-analyst-banking-systems",
    title: "Business Analyst — Banking Systems",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Banking Practice",
    summary:
      "Bridge business and technical teams on core banking and digital channel projects, turning client requirements into clear, buildable specifications.",
    responsibilities: [
      "Gather and document business requirements from banking client stakeholders",
      "Write functional specifications, process flows, and user stories for engineering teams",
      "Facilitate workshops to align business needs with system capabilities",
      "Facilitate UAT planning, test case review, and sign-off with business users",
      "Support change management, training material, and rollout communications",
      "Track requirement traceability from analysis through delivery",
      "Act as the day-to-day liaison between client business teams and delivery teams",
    ],
    requirements: [
      "5+ years as a business analyst in banking or financial services IT",
      "Strong requirements-gathering, process-mapping, and documentation skills",
      "Familiarity with core banking, payments, or digital channel workflows",
      "Comfortable facilitating workshops with senior business stakeholders",
      "Working knowledge of Agile/Scrum ceremonies and backlog management",
      "Based in or willing to relocate to Bengaluru; hybrid work model",
    ],
    niceToHave: [
      "CBAP or equivalent business analysis certification",
      "Experience with a core banking platform (Finacle, Flexcube, Temenos)",
      "Exposure to regulatory or compliance-driven change programs",
    ],
  },
  {
    slug: "ux-ui-designer-digital-channels",
    title: "UX/UI Designer — Digital Channels",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Platform",
    summary:
      "Design intuitive interfaces for banking and airline digital channels — internet banking, mobile apps, and airline self-service portals.",
    responsibilities: [
      "Design end-to-end user flows and high-fidelity UI for client digital channels",
      "Run usability testing and iterate designs based on client and user feedback",
      "Build and maintain design systems shared across banking and aviation products",
      "Translate complex regulatory and business flows into simple, accessible interfaces",
      "Collaborate closely with engineering on implementation feasibility and handoff",
      "Present design rationale and research findings to client stakeholders",
      "Conduct accessibility reviews to meet WCAG and financial-services UI standards",
    ],
    requirements: [
      "4+ years of product design experience, ideally in banking or travel/aviation",
      "Strong portfolio in Figma covering web and mobile design systems",
      "Understanding of accessibility and regulatory constraints in financial UI",
      "Experience conducting and synthesizing usability research",
      "Comfortable presenting and defending design decisions to client stakeholders",
      "Based in or willing to relocate to Bengaluru; hybrid work model",
    ],
    niceToHave: [
      "Experience designing for internet/mobile banking or airline booking flows",
      "Basic front-end knowledge (HTML/CSS) to collaborate closely with engineers",
      "Familiarity with design-system tooling (Storybook, tokens studio)",
    ],
  },
  {
    slug: "project-manager-aviation-programs",
    title: "Project Manager — Aviation Programs",
    type: "Full-time",
    location: "Bengaluru / Hybrid",
    dept: "Aviation Practice",
    summary:
      "Manage delivery of aviation IT programs — reservation, DCS, and crew management rollouts — from kickoff through go-live.",
    responsibilities: [
      "Own project plans, budgets, and delivery timelines for airline IT engagements",
      "Coordinate cross-functional teams across engineering, QA, integration, and client ops",
      "Manage risk, scope, dependencies, and change control throughout delivery",
      "Run steering committee meetings and report program status to airline client leadership",
      "Manage multi-vendor coordination across PSS, DCS, and infrastructure providers",
      "Plan and oversee cutover, go-live, and hypercare activities for aviation rollouts",
      "Identify and resolve blockers across teams to keep programs on schedule",
    ],
    requirements: [
      "6+ years of IT project management experience, aviation programs preferred",
      "PMP or equivalent certification a plus",
      "Comfortable managing mission-critical, multi-vendor programs under tight timelines",
      "Strong stakeholder management and executive reporting skills",
      "Experience managing risk, budget, and scope across complex IT delivery",
      "Based in or willing to relocate to Bengaluru; hybrid work model",
    ],
    niceToHave: [
      "Experience delivering PSS, DCS, or crew management rollouts",
      "PMP, PRINCE2, or Agile certification",
      "Experience working directly with airline operations stakeholders",
    ],
  },
  {
    slug: "site-reliability-engineer",
    title: "Site Reliability Engineer",
    type: "Full-time",
    location: "Bengaluru / Remote",
    dept: "Platform",
    summary:
      "Keep our clients' banking and aviation platforms highly available — building observability, automation, and incident response for mission-critical systems.",
    responsibilities: [
      "Define and track SLIs/SLOs for production banking and aviation workloads",
      "Build automation to reduce toil and speed up incident response",
      "Lead or support on-call rotations and post-incident reviews (blameless postmortems)",
      "Improve observability with metrics, logging, and tracing tooling (Prometheus, Grafana, ELK)",
      "Design and test disaster-recovery and failover procedures for critical systems",
      "Partner with engineering teams on capacity planning and performance tuning",
      "Drive continuous improvement of runbooks, alerting thresholds, and escalation paths",
    ],
    requirements: [
      "4+ years in SRE/DevOps roles supporting high-availability systems",
      "Strong scripting skills (Python/Go) and Kubernetes experience",
      "Experience with incident management, on-call practices, and postmortem culture",
      "Familiarity with observability stacks (Prometheus, Grafana, ELK, or similar)",
      "Understanding of capacity planning and performance tuning for critical workloads",
      "Remote-friendly; occasional travel to Bengaluru office",
    ],
    niceToHave: [
      "Experience with chaos engineering or resilience testing",
      "Exposure to banking or aviation production environments",
      "Certified Kubernetes Administrator (CKA) or equivalent",
    ],
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
