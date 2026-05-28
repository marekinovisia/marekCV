import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Marek Kellner",
  initials: "MK",
  location: "Prague, Czech Republic",
  locationLink: "https://www.google.com/maps/place/Prague",
  about: "AI Product Owner building products in regulated enterprise and as a founder.",
  summary:
    "I build and ship AI products end-to-end. At Novartis I'm Product Owner for multiple internal applications in compliance and operational reporting domains, where governance, traceability, and human-in-the-loop are non-negotiable. I focus on understanding how people actually work and building products that have measurable business outcomes. I've designed a process for rapid prototyping and deployment at enterprise scale. Inovisia Agency, which I founded in 2019, delivers AI sales and marketing automation for commercial clients, built around n8n and Claude.",
  avatarUrl: "/marek-avatar.jpg",
  personalWebsiteUrl: "https://marek.inovisia.agency",
  contact: {
    email: "marek.kellner@gmail.com",
    tel: "+420777749513",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marek-kellner/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Northeastern University",
      degree:
        "Bachelor of Science in Business Administration, Finance & Management Information Systems",
      start: "2012",
      end: "2017",
    },
    {
      school: "Quality Schools International Bratislava",
      degree: "Academic Diploma with Honors",
      start: "2008",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Novartis",
      link: "https://www.novartis.com",
      badges: ["Product Management", "AI", "Enterprise", "AWS", "Architecture"],
      title: "Associate Director (Product Owner), ERC Process Innovation",
      start: "2025",
      end: null,
      description:
        "Product Owner for several internal apps in compliance, audit, and operational reporting. Lead an IT Operations team. Partner with business and corporate functions across the organization.",
      highlights: [
        "Most of my time goes to building AI into the products I own. Design the architecture, prototype hands-on, partner with engineering for the production build.",
        "Regulated environments add real constraints: governance, traceability, and human oversight aren't optional. I build those requirements into the architecture, not bolt them on later.",
        "Run RFPs to replace legacy systems. I navigate multi-stakeholder buying, compliance reviews, and procurement gates.",
        "Also oversee bigger AI use cases jointly with our internal AI team. Process before technology: fix the workflow first, then bring the tools in.",
      ],
    },
    {
      company: "Novartis",
      link: "https://www.novartis.com",
      badges: ["Strategy", "Transformation", "Pharma", "Veeva", "Operating Model"],
      title: "Senior Management Consultant, Business Transformation",
      start: "2021",
      end: "2025",
      description:
        "Senior consultant on the Business Transformation team. Digital strategy, operating-model design, and major brand launches.",
      highlights: [
        "Led digital and data transformation on Sandoz's Pharmacy EvolutiON program, reimagining how Sandoz works with pharmacists. Built the data and digital foundation Agile teams used to deliver integrated insights to leadership.",
        "Designed the operating model for a 300+ associate Integrated Insights team. Then led the org design for 500+ associates during Gene Therapies (GTx) integration into Novartis.",
        "Led a team of 5 on marketing content for the Iptacopan C3G launch. Managed external vendors running quantitative and qualitative research.",
        "Managed 60+ executive stakeholders across global launches. Designed and ran the communication plans: regular updates, stakeholder meetings, feedback sessions.",
      ],
    },
    {
      company: "Novartis",
      link: "https://www.novartis.com",
      badges: ["CRM", "Veeva", "User Research", "Design Thinking"],
      title: "Management Consultant",
      start: "2020",
      end: "2021",
      description:
        "Consultant on the internal consulting team. Technology-enabled programs for global commercial and medical affairs.",
      highlights: [
        "Led design of the Global Medical Expert Engagement Planning module in Veeva CRM. Brought efficiency and transparency to how medical affairs operates at global, regional, and local levels.",
        "Developed roadmap and user stories for sales performance, sample, and strategic account management systems under the Next Generation Engagement program.",
      ],
    },
    {
      company: "Inovisia Agency",
      link: "https://www.inovisia.agency",
      badges: ["AI Automation", "n8n", "Claude", "Founder", "Commercial AI"],
      title: "Founder",
      start: "2019",
      end: null,
      description:
        "AI automation agency I founded in 2019. Delivers AI-powered sales and marketing systems to commercial clients in the EU and US, built around n8n and Claude.",
      highlights: [
        "Workflows cover lead generation, content production, qualification, booking, and nurture sequences.",
        "Live retainer with hospitality projects in the EU. US arm in development with a productized 3-tier offering for SMBs.",
        "I founded the company, designed the service offerings, and built the systems myself. Operations team handles ongoing client work.",
        "Rule: ~70% of recurring work must be AI-automated. The stack is the product.",
      ],
    },
    {
      company: "EY",
      link: "https://www.ey.com",
      badges: ["Data Warehousing", "SQL", "Enterprise Architecture", "MDS", "SSAS"],
      title: "Senior IT Consultant, IT Advisory",
      start: "2019",
      end: "2020",
      description:
        "Senior consultant on the IT Advisory team. Started as developer, then moved into enterprise architecture.",
      highlights: [
        "Built a custom SQL-based Data Warehouse supporting financial reconciliation across a 100+ company holding. Designed, integrated, and maintained 60+ transactional and master data tables.",
        "Designed synchronization patterns and tables for master-data changes using Microsoft MDS.",
        "Built 80+ data input tables for business users. Integrated SSAS pipelines using PowerQuery and MDX.",
        "Ran 30+ power-user interviews to refine the workflow before build.",
      ],
    },
    {
      company: "EY",
      link: "https://www.ey.com",
      badges: ["Cyber Security", "CISA", "ISO 27000", "TISAX", "IT Audit"],
      title: "Cyber Security Consultant",
      start: "2016",
      end: "2019",
      description:
        "Consultant on the IT Advisory team. Cyber security audits and risk assessments for financial services and automotive clients.",
      highlights: [
        "Verified information security for 10+ automotive manufacturers using the TISAX framework. Analyzed risks across change, access, and operational management.",
        "Established IT general controls for major financial institutions across 50+ business applications. Tested 100+ application controls for effectiveness.",
      ],
    },
  ],
  skills: [
    "Product Management",
    "Artificial Intelligence (AI)",
    "Agentic AI Development",
    "Large Language Models (LLMs)",
    "Retrieval-Augmented Generation (RAG)",
    "AWS / AWS Bedrock",
    "n8n",
    "Alteryx",
  ],
  projects: [],
  certifications: [
    "CISA (Certified Information Systems Auditor)",
    "ISO/IEC 27000",
    "Lean Six Sigma Green Belt",
    "Agile SAFe Practitioner",
    "BPMN Foundation",
    "Design Thinking by Google",
  ],
  languages: [
    {
      level: "Native",
      items: ["English", "Slovak"],
    },
    {
      level: "Proficient",
      items: ["Czech"],
    },
    {
      level: "Conversational",
      items: ["French", "Russian"],
    },
  ],
} as const;
