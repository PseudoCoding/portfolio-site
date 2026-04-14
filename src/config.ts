/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Site Configuration
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * This is the single source of truth for ALL portfolio content.
 * Edit this file to update any text, links, skills, projects, or metadata
 * without touching any component code.
 *
 * ---
 * RESUME: Drop your résumé PDF into `public/resume.pdf` and update
 * `meta.resumeUrl` below to '/resume.pdf'.
 * ---
 */

import type { SiteConfig } from './types';

export const config: SiteConfig = {
  // ─── Metadata ─────────────────────────────────────────────────────────────
  meta: {
    title: 'PseudoCoding | Principal Software Engineer',
    description:
      'Principal Software Engineer specializing in platform architecture, engineering leadership, and impact-driven distributed systems.',
    githubUrl: 'https://github.com/PseudoCoding',
    linkedinUrl: 'https://www.linkedin.com/in/pseudocoding/',
    // Drop your résumé into public/resume.pdf and change this to '/resume.pdf'
    resumeUrl: 'https://resume.r2.pseudocoding.xyz/devinhoude-resume.pdf',
  },

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    greeting: "Hello, I'm",
    name: 'Devin Houde',
    handle: '@PseudoCoding',
    taglines: [
      'Principal Software Engineer',
      'Platform & Infrastructure Architect',
      'DevOps Advocate',
      'Open-Source Contributor',
      'Engineering Leader',
      'Community Builder',
    ],
    bio: [
      '13+ years building and leading engineering platforms that power healthcare at scale. '
      + 'I own the hard problems: architecting distributed systems, defining platform strategy, '
      + 'and establishing the engineering standards that let teams ship with confidence.',
      'After leading an organization of 40+ engineers, I returned to the IC track by choice: '
      + 'to stay close to the work that matters most: multi-region infrastructure, zero-trust security, '
      + 'event-driven architecture, and the DevOps culture that makes scale sustainable. '
      + "I'm actively looking for a principal or staff role where I can own deep technical problems "
      + 'and help engineering organizations grow.',
    ],
    cta: { label: 'View Projects', href: '#projects' },
    ctaSecondary: { label: 'Résumé (PDF)', href: 'https://resume.r2.pseudocoding.xyz/devinhoude-resume.pdf' },
  },

  // ─── Experience ───────────────────────────────────────────────────────────
  // Entries are rendered newest-first in a vertical timeline.
  experience: {
    tagline: '13+ years building platforms, growing teams, and delivering impact in healthcare technology.',
    entries: [
      {
        id: 'independent',
        company: 'Independent Technical Projects',
        role: 'Principal Software Engineer',
        period: 'October 2025 – Present',
        summary:
          'Building and releasing open-source projects and AI experiments while '
          + 'leveraging AI-assisted development workflows to accelerate iteration and drive reusable CI/CD patterns.',
        highlights: [
          'Designed and released Vypher, an open-source CLI tool for detecting PII and PHI in source code, built for Finance and Healthcare compliance standards. Ships with 11 detection patterns, Luhn algorithm validation, SARIF output, and native binaries for macOS, Linux, and Windows via Homebrew, Scoop, and Docker.',
          'Built and released terraform-template, an open-source framework for automated Terraform workflows using GitHub Actions, enabling zero-touch infrastructure deployments and reusable CI/CD patterns.',
          'Architected and deployed Useful 2.0, a customizable resource hub built with React and TypeScript, designed for extensibility and rapid content iteration.',
          'Integrated AI-assisted development workflows (GitHub Copilot, Claude Code, and LLM APIs) to accelerate iteration speed and reduce manual development effort across multiple open-source projects.',
        ],
        technologies: ['Go', 'React', 'TypeScript', 'Terraform', 'GitHub Actions', 'GitHub Copilot', 'Claude Code', 'Docker', 'GoReleaser', 'Cloudflare Workers', 'Cloudflare Pages', 'OpenAI'],
      },
      {
        id: 'ensemble',
        company: 'Ensemble Health Partners',
        role: 'Associate Vice President → Principal Software Engineer',
        period: 'April 2022 – October 2025',
        summary:
          'Served as AVP of Engineering before returning to the IC track by choice as Architectural Owner of the Azure platform. '
          + 'Provided technical leadership and coordinated execution across a 40+ engineer organization delivering '
          + 'real-time event processing, platform modernization, and a full application platform redesign.',
        highlights: [
          'Architected the transition of a legacy monolith to a modern micro-frontend and microservice Revenue Cycle Management platform, accelerating core team deployments from monthly releases to multiple times a week.',
          'Engineered a robust event engine processing over 864,000 real-time healthcare events daily, pivoting legacy overnight batch workloads into continuous streams with under 15 minutes of latency.',
          'Led the technical direction of a voice-based AI platform integrated with enterprise telephony, automating support interactions and reducing customer service demand by 30%.',
          'Guided platform-wide architectural improvements that reduced response times from tens of seconds to sub-second levels, raising overall uptime from 70% to 95%.',
          'Introduced Terraform as the core IaC standard, modernized CI/CD via shared pipelines, and integrated zero-trust policies, enterprise RBAC, and automated vulnerability scanning into the SDLC.',
          'Scaled engineering culture across a 250-member organization: drove GitHub Copilot to a 35% daily active rate, harmonized Agile release cadences, and established standard templates for ADRs and post-incident reviews.',
        ],
        technologies: [
          'Azure', 'Terraform', 'Azure DevOps', 'TypeScript', 'React', 'Node.js',
          'Docker', 'OAuth 2.0', 'Snyk', '.NET Core', 'Wiz', 'GitHub Copilot',
          'SQL', 'Event-Driven Architecture', 'Micro-Frontends', 'Micro-Service Design',
          'Python', 'Key Vault', 'Azure Functions', 'Entity Framework', 'AI/Voice Platforms',
        ],
      },
      {
        id: 'optum-combined',
        company: 'Optum / UnitedHealth Group',
        role: 'Technology Development Program → Principal Software Engineer',
        period: '2012 – 2022',
        summary:
          'A decade-long trajectory from a new-grad rotational program to Principal Engineer. ' +
          'Architected production systems across healthcare domains, built internal developer platforms used by thousands of engineers, ' +
          'and established security, IaC, and open-source standards adopted organization-wide.',
        highlights: [
          'Defined and delivered an enterprise secrets-scanning capability monitoring 150,000+ repositories via scheduled sweeps and real-time GitHub App webhooks, surfacing findings in a public engineering dashboard to drive organic remediation.',
          'Architected and launched a self-service eventing platform enabling any team to onboard as event producers or consumers through a zero-ticket workflow; owned the infrastructure and the frontend management application.',
          'Reduced SDOH platform operational costs by over 50% while delivering the organization\'s first multi-lingual, full-stack TypeScript Azure application with end-to-end Terraform infrastructure from day one.',
          'Led the Open-Source Program Office: defined repository quality standards, partnered with legal on IP protection, and built a developer-first contribution model for a Fortune 50 technology organization.',
          'Built and grew the internal DevOps Community from ~100 to 500+ engineers through monthly events and cross-team tooling forums.',
          'Became a key contributor to a JDBC-based Java platform and completed clinical mapping tools during early career rotations, establishing the track record that accelerated a principal engineering trajectory.'
        ],
        technologies: [
          // Combined list of the most relevant top-tier tech:
          'TypeScript', 'Node.js', 'React', 'Java', '.NET', 'C#',
          'Azure', 'Terraform', 'Kubernetes', 'Docker',
          'GitHub Apps', 'GitHub Enterprise', 'Jenkins', 'SQL'
        ],
      }
      ,],
  },

  // ─── Skills ───────────────────────────────────────────────────────────────
  // level: 1–5 (1 = familiar, 3 = proficient, 5 = expert / deep SME)
  skills: [
    {
      category: 'Languages & Runtimes',
      icon: 'Terminal',
      skills: [
        { name: 'TypeScript', level: 5 },
        { name: 'JavaScript', level: 5 },
        { name: 'Node.js', level: 5 },
        { name: 'C#', level: 4 },
        { name: 'HCL', level: 5 },
        { name: 'Java', level: 5 },
        { name: 'Python', level: 3 },
        { name: 'Bash', level: 3 },
        { name: 'Groovy', level: 3 },
        { name: 'Go', level: 1 },
        { name: 'C++', level: 2 },
      ],
    },
    {
      category: 'Frontend',
      icon: 'Monitor',
      skills: [
        { name: 'React', level: 5 },
        { name: 'Tailwind CSS', level: 4 },
        { name: 'Vite', level: 4 },
        { name: 'Angular', level: 3 },
        { name: 'Electron', level: 3 },
        { name: 'Vue', level: 2 },
      ],
    },
    {
      category: 'Architecture & Patterns',
      icon: 'Network',
      skills: [
        { name: 'Micro-Services', level: 5 },
        { name: 'Micro-Frontends', level: 5 },
        { name: 'Event-Driven Architecture', level: 5 },
        { name: 'RESTful APIs', level: 5 },
        { name: 'RBAC', level: 5 },
        { name: 'Zero-Trust', level: 4 },
        { name: 'Multi-Region', level: 4 },
        { name: 'Multi-Cloud', level: 3 },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: 'Server',
      skills: [
        { name: '.NET', level: 4 },
        { name: 'Entity Framework', level: 4 },
        { name: 'Spring Boot', level: 4 },
        { name: 'GraphQL', level: 3 },
        { name: 'Spring Cloud', level: 4 },
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      icon: 'Cloud',
      skills: [
        { name: 'Microsoft Azure', level: 5 },
        { name: 'Terraform', level: 5 },
        { name: 'Amazon Web Services', level: 3 },
        { name: 'Azure Resource Manager', level: 4 },
      ],
    },
    {
      category: 'Containers & Orchestration',
      icon: 'Package',
      skills: [
        { name: 'Docker', level: 5 },
        { name: 'Kubernetes', level: 5 },
        { name: 'Helm', level: 3 },
        { name: 'OpenShift', level: 4 },
        { name: 'Kustomize', level: 4 },
      ],
    },
    {
      category: 'CI/CD & DevOps',
      icon: 'GitMerge',
      skills: [
        { name: 'GitHub Actions', level: 5 },
        { name: 'Azure DevOps Pipelines', level: 5 },
        { name: 'Jenkins', level: 5 },
        { name: 'Maven', level: 3 },
        { name: 'Gradle', level: 4 },
      ],
    },
    {
      category: 'Databases, Caching & Storage',
      icon: 'Database',
      skills: [
        { name: 'SQL', level: 5 },
        { name: 'PostgreSQL', level: 4 },
        { name: 'NoSQL', level: 4 },
        { name: 'MongoDB', level: 4 },
        { name: 'CosmosDB', level: 3 },
        { name: 'Redis', level: 5 },
      ],
    },
    {
      category: 'Security & Compliance',
      icon: 'Shield',
      skills: [
        { name: 'OAuth 2.0', level: 4 },
        { name: 'Snyk', level: 4 },
        { name: 'Wiz', level: 4 },
        { name: 'Fortify', level: 3 },
        { name: 'Rapid7', level: 3 },
        { name: 'Probely', level: 2 },
      ],
    },
    {
      category: 'Observability & Monitoring',
      icon: 'Activity',
      skills: [
        { name: 'Azure Application Insights', level: 4 },
        { name: 'Splunk', level: 4 },
        { name: 'Grafana', level: 3 },
        { name: 'Prometheus', level: 3 },
        { name: 'New Relic', level: 3 },
        { name: 'Datadog', level: 3 },
        { name: 'Dynatrace', level: 3 },
      ],
    },
    {
      category: 'Testing & Quality',
      icon: 'FlaskConical',
      skills: [
        { name: 'Jest', level: 4 },
        { name: 'xUnit', level: 4 },
        { name: 'Playwright', level: 3 },
        { name: 'JUnit', level: 3 },
        { name: 'MSTest', level: 3 },
        { name: 'JMeter', level: 5 },
        { name: 'Mocha', level: 3 },
        { name: 'SauceLabs', level: 4 },
        { name: 'BlazeMeter', level: 4 },
        { name: 'TestCafe', level: 3 },
      ],
    },
    {
      category: 'AI & Developer Tools',
      icon: 'Bot',
      skills: [
        { name: 'GitHub Copilot', level: 5 },
        { name: 'Claude / Claude Code', level: 4 },
        { name: 'RAG', level: 3 },
        { name: 'GPT', level: 3 },
        { name: 'Ollama', level: 3 },
        { name: 'Gemini Pro', level: 2 },
      ],
    },
  ],

  // ─── Education ────────────────────────────────────────────────────────────
  education: [
    {
      institution: 'Western New England University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      year: '2012',
      highlights: [],
    },
  ],

  // ─── Certifications ───────────────────────────────────────────────────────
  certifications: [
    {
      name: 'Azure Fundamentals',
      issuer: 'Microsoft',
      year: 'AZ-900',
      icon: 'Award',
    },
  ],

  // ─── Projects ─────────────────────────────────────────────────────────────
  projects: [
    {
      id: 'secrets-scanner',
      title: 'Enterprise Secrets Scanner',
      description:
        'A company-wide secrets detection platform that parsed every repository in GitHub Enterprise, surfacing exposed credentials, ' +
        'tokens, and keys before they could be exploited.',
      highlights: [
        'Hybrid ingestion: scheduled cron sweeps + real-time GitHub App webhooks for instant detection on push.',
        'Open engineering dashboard visible to all of technology, driving organic, ownership-based remediation.',
        'Zero enforcement friction; education-first design increased voluntary compliance.',
      ],
      impact: 'Reduced secrets exposure risk across > 150,000 repositories at a Fortune 50 healthcare company.',
      technologies: ['Node.js', 'JavaScript', 'GitHub Apps', 'Webhooks', 'React', 'Docker', 'MongoDB', 'GitHub Enterprise'],
      featured: true,
    },
    {
      id: 'eventing-platform',
      title: 'Self-Service Eventing Platform',
      description:
        'An internal platform that let any team onboard as an event producer or consumer through a self-service workflow, ' +
        'enabling secure, governed, asynchronous communication across the organization.',
      highlights: [
        'Full self-service onboarding UI; no ticket required to start publishing or consuming events.',
        'Infrastructure automatically provisioned on registration; topic lifecycle fully managed.',
        'Eliminated informal data-sharing patterns (e.g., point-to-point REST polling) across dozens of teams.',
      ],
      impact: 'Decoupled 30+ teams from direct service dependencies, improving system resilience and deployment independence.',
      technologies: ['Azure Service Bus', 'Node.js', 'TypeScript', 'React', 'Kubernetes', 'Terraform', 'MongoDB'],
      featured: true,
    },
    {
      id: 'useful',
      title: '"Useful": Internal Resource Hub',
      description:
        'An organization-wide internal navigation hub that aggregated links, tools, and team resources into a single searchable interface. ' +
        'Content was driven entirely by YAML committed to a Git repository; anyone could contribute.',
      highlights: [
        'YAML-in-Git as the content model: low barrier to contribution, full audit trail, no CMS overhead.',
        'Became the default start page for hundreds of engineers navigating a complex org structure.',
        'Hubot integrations extended the hub into chat, letting you find resources without leaving your workflow.',
      ],
      impact: 'Reduced time-to-information for engineers navigating a > 20,000 person technology organization.',
      technologies: ['React', 'Node.js', 'YAML', 'GitHub', 'Hubot'],
    },
    {
      id: 'rcm-platform',
      title: 'RCM Micro-Frontend Platform',
      description:
        'Led the design and delivery of a modern micro-UI + micro-service platform to replace a legacy monolithic RCM application ' +
        'at Ensemble Health Partners.',
      highlights: [
        'Module federation architecture enabling independent team deployments with no shared release trains.',
        'Standardized micro-service contract patterns that reduced cross-team integration friction.',
        'Paired with a reusable CI/CD pipeline library that cut new service onboarding from days to hours.',
      ],
      impact: 'Unblocked parallel team delivery and reduced deployment risk for a critical revenue-cycle system across 10 teams.',
      technologies: ['React', 'Module Federation', 'TypeScript', 'Azure', 'Azure DevOps', 'Terraform', 'C#'],
    },
    {
      id: 'sdoh',
      title: 'Social Determinants of Health Platform',
      description:
        "Greenfield multi-lingual Azure cloud application addressing social determinants of health " +
        'and an early proving ground for full Terraform-driven infrastructure.',
      highlights: [
        'End-to-end infrastructure as code via Terraform from day zero.',
        'Full-stack TypeScript (frontend + backend) with full multi-lingual support.',
        'Direct Microsoft collaboration as early adopters on preview Azure services.',
      ],
      impact:
        'Established Terraform and TypeScript as validated patterns, accelerating future projects and the company-wide IaC library.',
      technologies: ['Azure', 'Terraform', 'TypeScript', 'React', 'Node.js', 'Azure Functions', 'CosmosDB', 'PostgreSQL'],
    },
  ],

  // ─── GitHub / Open-Source Projects ────────────────────────────────────────
  githubProjects: [
    {
      id: 'useful-2',
      title: 'Useful 2.0',
      repo: 'PseudoCoding/useful-2.0',
      description:
        'A modern internal resource hub SPA for organizations. Supports REST API or private Git-based data sources, '
        + 'rich theming, global announcements, and Docker deployment with a secure proxy.',
      languages: ['TypeScript', 'CSS', 'JavaScript'],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Docker', 'Cloudflare Workers', 'Node.js'],
      liveUrl: 'https://useful.pseudocoding.xyz/',
    },
    {
      id: 'experiment',
      title: 'Experiment',
      repo: 'PseudoCoding/experiment',
      description:
        'An interactive AI history timeline whose color palette and aesthetic are regenerated daily '
        + 'by GitHub Copilot via a GitHub Actions cron job calling the GitHub Models API.',
      languages: ['TypeScript', 'CSS', 'JavaScript'],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'OpenAI', 'GitHub Actions', 'Cloudflare Pages'],
      liveUrl: 'https://experiment.ai.pseudocoding.xyz/',
    },
    {
      id: 'debate',
      title: 'AI Debate',
      repo: 'PseudoCoding/debate',
      description:
        'An ongoing autonomous debate between GPT-4o (pro-AI) and GPT-4o-mini (anti-AI). '
        + 'A new argument is added every 4 hours via GitHub Actions and the site auto-deploys on Cloudflare Pages.',
      languages: ['CSS', 'JavaScript', 'Python'],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'OpenAI', 'GitHub Actions', 'Cloudflare Pages'],
      liveUrl: 'https://debate.ai.pseudocoding.xyz/',
    },
    {
      id: 'terraform-template',
      title: 'Terraform Template',
      repo: 'PseudoCoding/terraform-template',
      description:
        'A production-ready Terraform repository template optimized for Azure. '
        + 'Includes multi-environment configs, GitHub Actions CI/CD with tfsec/Checkov/Infracost, and a comprehensive Makefile.',
      languages: ['HCL', 'Makefile'],
      technologies: ['Terraform', 'Azure', 'GitHub Actions', 'tfsec', 'Checkov', 'Infracost'],
    },
    {
      id: 'vypher',
      title: 'Vypher',
      repo: 'vypher-io/cli',
      description:
        'An advanced CLI tool for detecting PII and PHI in source code, built for Finance and Healthcare compliance standards. '
        + 'Ships with 11 built-in detection patterns covering credit cards, SSNs, IBANs, MRNs, ICD-10 codes, crypto addresses, and more. '
        + 'Uses the Luhn algorithm and keyword proximity detection to minimize false positives. '
        + 'Outputs console, JSON, and SARIF reports compatible with GitHub Code Scanning. '
        + 'Supports Homebrew (macOS/Linux), Scoop (Windows), and Docker with native binaries for amd64 and arm64.',
      languages: ['Go'],
      technologies: ['Go', 'Cobra', 'Docker', 'GoReleaser', 'GitHub Actions', 'Homebrew', 'Scoop', 'SARIF', 'VitePress', 'React', 'Vite', 'Tailwind CSS', 'Cloudflare'],
      liveUrl: 'https://vypher.io',
    },
    {
      id: 'knowledge-base',
      title: 'Knowledge Base',
      repo: 'PseudoCoding/knowledge-base',
      description: 'A structured documentation site capturing technology knowledge and engineering patterns.',
      languages: ['Markdown'],
      technologies: ['Documentation'],
      comingSoon: true,
    },
    {
      id: 'dynamic-theming',
      title: 'Dynamic Theming',
      repo: 'PseudoCoding/dynamic-theming',
      description: 'AI-generated themes for React applications. Dynamically produce and apply design tokens at runtime.',
      languages: ['TypeScript', 'CSS'],
      technologies: ['React', 'OpenAI'],
      comingSoon: true,
    },
  ],

  // ─── Community ────────────────────────────────────────────────────────────
  community: [
    {
      title: 'DevOps Community Forum',
      description:
        'Joined Optum\'s internal DevOps Community early on, eventually taking the co-lead and growing membership from ~100 to over 500 engineers. ' +
        'Ran monthly events, facilitated knowledge-sharing, and created a forum for cross-team tooling discussions.',
      metric: '500+ engineers · Monthly',
      icon: 'Users',
    },
    {
      title: 'Breaking Bad',
      description:
        'Founded a monthly cross-functional knowledge-sharing community at Ensemble Health Partners, bringing together engineers from ' +
        'all product teams to share learnings, patterns, and post-incident retrospectives.',
      metric: '100+ engineers · Monthly',
      icon: 'Users',
    },
    {
      title: 'Friendly Gaming',
      description:
        'Created a Discord server for friendly gaming among colleagues across multiple companies. Organized regular game events to foster connection and fun outside of work.',
      metric: '30 members',
      icon: 'Users',
    },
  ],

  // ─── Hobbies ──────────────────────────────────────────────────────────────
  hobbies: [
    {
      name: 'Rock Climbing',
      icon: 'Mountain',
      description:
        'Whether it\'s belaying or bouldering, I find that the problem-solving mindset that makes me a good engineer ' +
        'translates directly to reading a route.',
    },
    {
      name: 'Snowboarding',
      icon: 'Wind',
      description:
        'Charging down a mountain at speed is one of the best resets I know. Northeast snowy winters keep me happy.',
    },
    {
      name: '3D Printing & Modeling',
      icon: 'Box',
      description:
        'I design and print everything from functional parts to display pieces. It scratches the same itch as systems design: ' +
        'constraints, tolerances, and iteration.',
    },
    {
      name: 'LEGO Building',
      icon: 'Layers',
      description:
        'Mostly Batman, NASA, and Star Wars sets. There\'s something meditative about following a complex build manual, ' +
        'a different kind of engineering.',
    },
    {
      name: 'Gaming',
      icon: 'Gamepad2',
      description:
        'It\'s what got me into tech in the first place: hacking Total War: Rome, then learning to code, then never stopping. ' +
        'Age of Empires still holds up.',
    },
    {
      name: 'Funko Pop Collecting',
      icon: 'Star',
      description:
        'Deadpool, Batman, Star Wars, Guardians of the Galaxy. Every shelf tells a story about what\'s on my mind at the time.',
    },
  ],

  // ─── Testimonials ─────────────────────────────────────────────────────────
  // Add quotes from colleagues, managers, or LinkedIn recommendations here.
  testimonials: [
    {
      quote:
        "I had the pleasure of working with Devin at Ensemble Health Partners, where I hand-selected him to serve as our Principal Engineer. He led the complete rewrite of the Patient Access portion of our revenue cycle platform — a transformative initiative that modernized our architecture and significantly improved scalability, performance, and overall reliability. Beyond his technical excellence, Devin is an empathetic and thoughtful leader who naturally elevates everyone around him.",
      author: "Ryan Sites",
      role: "SVP of Engineering",
      company: "Ensemble Health Partners",
      initials: "RS",
    },
    {
      quote:
        "Devin is one of those rare engineers who combines deep technical expertise with strategic foresight; consistently designing systems that are as elegant as they are reliable. His work not only improved deployment reliability and speed but also emphasized security and cost efficiency — a balance that's difficult to achieve and one he handled exceptionally well. Any team would be fortunate to have Devin.",
      author: "Andrew Hall",
      role: "Staff Software Engineer | Cloud & AI Architect",
      company: "Ensemble Health Partners",
      initials: "AH",
    },
    {
      quote:
        "Devin is one of the most reliable, gifted, and forward-thinking technology professionals I've had the opportunity to collaborate with. Whether streamlining CI/CD pipelines, integrating complex workflows, or automating deployments, he consistently delivered solutions that were not only efficient and scalable but also secure by design. His calm, security-conscious approach and technical leadership inspire confidence across the team.",
      author: "Adam Engle",
      role: "Director of Cybersecurity Technical Assessments",
      company: "Ensemble Health Partners",
      initials: "AE",
    },
    {
      quote:
        "He is one of the best developers, network engineers, and Azure gurus that I have met. He is capable of both 'down in the weeds' technical work as well as leadership roles. I would be comfortable hiring Devin in a variety of roles but he is certainly well suited for Principal Software Engineer and will be able to lead a team into better, more robust infrastructure as code, network architecture and application development.",
      author: "Brian McCord",
      role: "Manager, Software Engineering",
      company: "Ensemble Health Partners",
      initials: "BM",
    },
    {
      quote:
        "He's an expert in the field and an individual I reach out frequently to get his input regarding various topics, such as Source Control Management, DevOps and CI/CD best practices. I would highly recommend Devin as a Principal Software Engineer/Application Architect.",
      author: "Sebastian Guzera",
      role: "IT Architecture",
      company: "UnitedHealth Group / Optum",
      initials: "SG",
    },
    {
      quote:
        "Devin is a fantastic engineer who is highly motivated and technical. He is always looking for ways to improve development tools, share his knowledge base with his fellow engineers and provide reuse wherever he can. I enjoyed working with Devin and would always be willing to have him on my team!",
      author: "Sashanka Dwivedula",
      role: "Senior Director of Software Engineering",
      company: "UnitedHealth Group / Optum",
      initials: "SD",
    },
  ],

  // ─── Contact ──────────────────────────────────────────────────────────────
  contact: {
    heading: "Let's Work Together",
    subheading:
      "I'm actively looking for a principal or staff engineering role in platform, infrastructure, or developer tooling. "
      + "If you're building something technically demanding and want an engineer who can own the architecture end-to-end, let's talk.",
    email: 'devin@pseudocoding.xyz',
    calendlyUrl: 'https://calendly.com/pseudocoding/intro',
  },
};
