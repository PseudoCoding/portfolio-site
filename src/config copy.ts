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
    resumeUrl: '/devinhoude-resume.pdf',
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
      'Engineering Leader',
      'Open-Source Contributor',
      'Community Builder',
      'Enabler of Technical Excellence',
      'Mentor',
      'Lifelong Learner',
    ],
    bio: [
      '10+ years building and leading engineering platforms that power healthcare at scale. '
        + 'I thrive at the intersection of deep technical ownership and organizational impact: '
        + 'architecting distributed systems, defining platform strategy, and raising the engineering bar '
        + 'for the teams around me.',
      'After leading an organization of 40+ engineers, I returned to the IC track by choice to stay '
        + 'close to the hardest problems: multi-region infrastructure, zero-trust security posture, '
        + 'event-driven architecture, and the DevOps culture that turns good teams into great ones. '
        + "I'm actively looking for a principal or staff engineering role where I can do both.",
    ],
    cta: { label: 'See My Work', href: '#projects' },
    ctaSecondary: { label: 'Download Résumé', href: '/devinhoude-resume.pdf' },
  },

  // ─── Experience ───────────────────────────────────────────────────────────
  // Entries are rendered newest-first in a vertical timeline.
  experience: {
    tagline: 'A decade of building platforms, growing teams, and delivering impact in healthcare technology.',
    entries: [
      {
        id: 'ensemble',
        company: 'Ensemble Health Partners',
        role: 'Principal Software Engineer',
        period: '2022 – 2025',
      summary:
        'Engineering owner of the Azure cloud platform across a large-scale revenue cycle management (RCM) product company. '
        + 'Led platform modernization, security tooling, and real-time data architecture while managing an organization of 40+ engineers '
        + 'before returning to the IC track in the final year to focus on deep technical delivery.',
      highlights: [
        'Led and grew an engineering organization of 40+ engineers across platform and product teams.',
        'Improved legacy application uptime from 70% to 95% through architectural remediation and operational discipline.',
        'Served as engineering owner of all Azure Subscriptions: governance, RBAC, cost optimization, and incident response.',
        'Led the adoption of Terraform for IaC and built the reusable module library used across all product teams.',
        'Architected the event engine for real-time healthcare events, optimizing the boundary between batch and streaming processing.',
        'Led development of a micro-UI / micro-service platform to replace a legacy monolith.',
        'Drove organization-wide adoption of GitHub Copilot, Snyk, Wiz, and Probely into SDLC practices.',
        'Implemented OAuth 2.0 and enterprise-wide RBAC policies.',
        'Built reusable CI/CD pipeline library for Azure DevOps, reducing pipeline authoring time across teams.',
        'Established Docusaurus-based documentation culture: architecture decision records, component docs, and blameless RCAs.',
        'Owned Azure DevOps, GitHub Enterprise, and DockerHub at the organization level.',
        'Launched monthly cross-team knowledge-sharing community across all of technology.',
        'Optimized critical SQL query performance and the interaction between batch and real-time event processing.',
      ],
      technologies: [
        'Azure', 'Terraform', 'Azure DevOps', 'TypeScript', `Material-UI`,
        'React', 'Node.js', 'Docker', 'OAuth 2.0', 'Snyk', '.Net Core', 'JavaScript',
        'Wiz', 'GitHub Copilot', 'SQL', 'Event-Driven Architecture', 'Real-Time Data',
        'Docusaurus', 'RBAC', 'CI/CD', 'Micro-Frontends', 'Micro-Service Design',
        'Python', 'Key Vault', 'Blob Storage', 'Azure Functions', 'Entity Framework',
      ],
    },
    {
      id: 'optum-ea',
      company: 'UnitedHealth Group / Optum',
      role: 'Principal Software Engineer, Enterprise Architecture',
      period: '2020 – 2022',
      summary:
        'Embedded in the Enterprise Architecture organization with broad authority to solve cross-cutting concerns. ' +
        'Built internal platforms, security tooling, and established the open-source office and its founding standards.',
      highlights: [
        'Built a secrets-scanning platform that parsed all GitHub Enterprise repositories via cron and webhook (GitHub Apps), ' +
          'surfacing findings in a public engineering dashboard to drive organic remediation.',
        'Designed and operated a self-service eventing platform; teams could onboard as producers or consumers, and I owned the ' +
          'infrastructure and the frontend management application.',
        'Led the Open-Source Program Office as engineering lead: set repository standards, partnered with legal on IP protection, ' +
          'and created a sustainable contribution model.',
        'Maintained "Useful", an internal resource hub driven entirely by YAML in Git, reducing organizational navigation friction.',
      ],
      technologies: [
        'GitHub Apps', 'Node.js', 'TypeScript', 'React', 'Service Bus', 'Kubernetes',
        'GitHub Enterprise', 'Webhooks', 'YAML', 'Open Source',
      ],
    },
    {
      id: 'optum-sdoh',
      company: 'UnitedHealth Group / Optum',
      role: 'Senior Software Engineer, Social Determinants of Health',
      period: '2019 – 2020',
      summary:
        'Led engineering for a greenfield SDOH project, introducing the company\'s first multi-lingual application fully ' +
        'hosted on Azure and built with Terraform from day one.',
      highlights: [
        'Designed and delivered the full Azure infrastructure via Terraform; first project in the org to do so end-to-end.',
        'Built frontend and backend entirely in TypeScript.',
        "Collaborated directly with Microsoft as early adopters of several Azure components still in active development.",
        'Contributed to the company-wide reusable Terraform module library.',
      ],
      technologies: ['Azure', 'Terraform', 'TypeScript', 'React', 'Node.js', 'Azure Functions'],
    },
    {
      id: 'optum-platform',
      company: 'UnitedHealth Group / Optum',
      role: 'Senior Software Engineer, Platform Engineering',
      period: '2016 – 2019',
      summary:
        'Became the go-to engineer for a next-generation micro-service platform powering healthcare eligibility and claims ' +
        'products. Helped architect both products, grew engineering teams, and mentored engineers across the stack.',
      highlights: [
        'Owned security strategy, logging strategy, and backend infrastructure for the platform.',
        'Worked directly with Red Hat to resolve performance and stability issues inside OpenShift.',
        'Implemented multi-region load balancing using AWS Route 53 and static asset delivery via CloudFront.',
        'Architected two products (Eligibility & Claims), built both engineering teams, and mentored engineers on platform best practices.',
        'Gained expertise across the full platform stack: frontend, load balancing, service discovery, API gateway, auth, IaC, CI/CD, and log management.',
        'Led and grew the internal DevOps Community from ~100 to 500+ members.',
        'Built Hubot-based chatbots integrating Jenkins pipelines and internal tooling into Slack-style chat.',
      ],
      technologies: [
        'Java', '.NET', 'React', 'OpenShift', 'Kubernetes', 'AWS Route 53',
        'CloudFront', 'Jenkins', 'Ansible', 'Docker', 'Splunk', 'Hubot',
      ],
    },
    {
      id: 'optum-tdp',
      company: 'UnitedHealth Group / Optum',
      role: 'Software Engineer, Technology Development Program',
      period: '2012 – 2016',
      summary:
        'Joined straight out of college (B.S. Computer Science, Western New England University, 2012) through a '
        + '2-year rotational program, choosing a new team and domain every 8 months. '
        + 'Rapidly gained breadth across .NET, mainframe-adjacent systems, and enterprise Java platforms.',
      highlights: [
        'Rotation 1: Built .NET reporting applications and console utilities for Tricare.',
        'Rotation 2: Mainframe support team; built .NET companion apps and an ICD-10 mapping tool.',
        'Rotation 3: Large-scale Java employer platform; led documentation for phase-out of legacy reporting platform.',
        'Post-program: Joined JDBC-based Java platform as a founding contributor, taking initiative on deployments and API internals ' +
          'that led directly to a principal-track trajectory.',
      ],
      technologies: ['.NET', 'C#', 'Java', 'SQL', 'JDBC', 'Mainframe', 'Maven', 'Jenkins'],
    },],
  },

  // ─── Skills ───────────────────────────────────────────────────────────────
  // level: 1–5 (1 = familiar, 5 = expert / deep SME)
  skills: [
    {
      category: 'Cloud & Infrastructure',
      icon: 'Cloud',
      skills: [
        { name: 'Azure', level: 5 },
        { name: 'AWS', level: 3 },
        { name: 'Terraform', level: 5 },
        { name: 'Kubernetes', level: 4 },
        { name: 'OpenShift', level: 4 },
        { name: 'Docker', level: 5 },
        { name: 'Google Cloud Platform', level: 1 },
      ],
    },
    {
      category: 'Languages & Runtimes',
      icon: 'Terminal',
      skills: [
        { name: 'TypeScript', level: 5 },
        { name: 'JavaScript', level: 5 },
        { name: 'Java', level: 4 },
        { name: 'C# / .NET', level: 3 },
        { name: 'SQL', level: 2 },
        { name: 'Bash / Shell', level: 4 },
        { name: 'Python', level: 3 },
        { name: 'Go', level: 2 },
        { name: 'Groovy', level: 3 },
      ],
    },
    {
      category: 'Frontend',
      icon: 'Layout',
      skills: [
        { name: 'React', level: 5 },
        { name: 'Vite', level: 4 },
        { name: 'Micro-Frontends', level: 4 },
        { name: 'Tailwind CSS', level: 4 },
      ],
    },
    {
      category: 'Platform & DevOps',
      icon: 'GitBranch',
      skills: [
        { name: 'GitHub Enterprise', level: 5 },
        { name: 'Azure DevOps', level: 5 },
        { name: 'GitHub Actions', level: 4 },
        { name: 'Jenkins', level: 5 },
        { name: 'GitLab', level: 2 },
        { name: 'Docusaurus', level: 4 },
      ],
    },
    {
      category: 'Architecture',
      icon: 'Network',
      skills: [
        { name: 'Distributed Systems', level: 5 },
        { name: 'Event-Driven Architecture', level: 5 },
        { name: 'Micro-Service Design', level: 5 },
        { name: 'API Gateway / Service Mesh', level: 4 },
        { name: 'Multi-Region / HA', level: 4 },
      ],
    },
    {
      category: 'Security',
      icon: 'Shield',
      skills: [
        { name: 'OAuth 2.0 / OIDC', level: 5 },
        { name: 'RBAC & IAM', level: 5 },
        { name: 'Secrets Management', level: 5 },
        { name: 'Snyk', level: 4 },
        { name: 'Wiz', level: 3 },
        { name: 'Probely', level: 1 },
        { name: 'Zero-Trust Architecture', level: 4 },
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
      impact: 'Reduced secrets exposure risk across thousands of repositories at a Fortune 50 healthcare company.',
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
      technologies: ['Kafka', 'Node.js', 'TypeScript', 'React', 'Kubernetes', 'Terraform'],
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
      impact: 'Reduced time-to-information for engineers navigating a 10K+ person technology organization.',
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
      impact: 'Unblocked parallel team delivery and reduced deployment risk for a critical revenue-cycle system.',
      technologies: ['React', 'Module Federation', 'TypeScript', 'Azure', 'Azure DevOps', 'Terraform'],
    },
    {
      id: 'sdoh',
      title: 'Social Determinants of Health Platform',
      description:
        "Greenfield Azure cloud application addressing social determinants of health, Optum's first multi-lingual application, " +
        'and an early proving ground for full Terraform-driven infrastructure.',
      highlights: [
        'End-to-end infrastructure as code via Terraform from day zero.',
        'Full-stack TypeScript (frontend + backend), first multi-lingual app in the portfolio.',
        'Direct Microsoft collaboration as early adopters on preview Azure services.',
      ],
      impact:
        'Established Terraform and TypeScript as validated patterns, accelerating future projects and the company-wide IaC library.',
      technologies: ['Azure', 'Terraform', 'TypeScript', 'React', 'Node.js', 'Azure Functions'],
    },
    {
      id: 'oss-office',
      title: 'Open-Source Program Office',
      description:
        'Stood up engineering practices for responsible open-source contribution at a Fortune 50 company, balancing IP protection with genuine community participation.',
      highlights: [
        'Defined repository quality standards (READMEs, licensing, DCO sign-off, security policies).',
        'Partnered with legal on an IP-safe contribution policy used across all of technology.',
        'Created a developer-first contribution guide that made compliance feel like good engineering, not legal overhead.',
      ],
      impact:
        'Enabled engineers to participate in open source confidently, reducing shadow contributions and legal exposure.',
      technologies: ['GitHub Enterprise', 'Open Source Policy', 'CODEOWNERS', 'GitHub Apps'],
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
      repo: 'PseudoCoding/vypher',
      description: 'A security-focused development tool. More details coming soon.',
      languages: [ 'Go' ],
      technologies: ['CLI Tool', 'Security'],
      comingSoon: true,
    },
    {
      id: 'knowledge-base',
      title: 'Knowledge Base',
      repo: 'PseudoCoding/knowledge-base',
      description: 'A structured documentation site capturing technology knowledge and engineering patterns.',
      languages: [ 'Markdown' ],
      technologies: ['Documentation'],
      comingSoon: true,
    },
    {
      id: 'dynamic-theming',
      title: 'Dynamic Theming',
      repo: 'PseudoCoding/dynamic-theming',
      description: 'AI-generated themes for React applications. Dynamically produce and apply design tokens at runtime.',
      languages: [],
      technologies: ['React', 'OpenAI'],
      comingSoon: true,
    },
  ],

  // ─── Community ────────────────────────────────────────────────────────────
  community: [
    {
      title: 'DevOps Community Leadership',
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
      "I'm actively looking for a principal or staff engineering role. If you're building something technically ambitious "
      + "and want someone who can own deep IC work without losing sight of the bigger picture, let's talk. "
      + 'Find me on LinkedIn or GitHub.',
    email: 'devin@pseudocoding.xyz',
  },
};
