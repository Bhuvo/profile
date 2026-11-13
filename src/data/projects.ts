import type { ProjectItem } from '../types'

export const projects: ProjectItem[] = [
  {
    id: 'jobify',
    title: 'Jobify',
    subtitle: 'Intelligent Career & Recruitment Ecosystem',
    category: 'AI-Powered Recruitment Platform',
    description:
      'An AI-powered recruitment platform designed to simplify job discovery, resume analysis, and candidate-job matching.',
    problemStatement:
      'Job seekers struggle with opaque ATS filtering algorithms, misaligned resumes, and disjointed application processes, while recruiters face high noise-to-signal ratios.',
    solution:
      'Built an end-to-end AI platform combining automated multi-section resume parsing, deep semantic ATS compatibility scoring, and real-time gap analysis using OpenAI embeddings and FastAPI.',
    features: [
      'AI-powered resume analysis and semantic scoring',
      'Job description matching and keyword alignment',
      'Interactive resume builder with 13 comprehensive sections',
      'ATS compatibility analysis and scoring',
      'Candidate-to-job recommendation matching',
      'AI-generated skill gap insights and improvement tips',
      'External job discovery integration',
    ],
    technologies: ['Flutter', 'Python', 'FastAPI', 'Firebase', 'OpenAI API', 'Next.js'],
    architecture: {
      flow: [
        'Client (Flutter / Next.js)',
        'FastAPI Gateway',
        'OpenAI Prompt & Embedding Engine',
        'Firebase & Job Ingestion Pipeline',
      ],
      summary:
        'Frontend → FastAPI Backend → AI Processing Engine (Embeddings & Prompt Engineering) → Firebase Database & External Job Aggregators.',
    },
    featured: true,
    badgeColor: 'from-purple-500 to-indigo-600',
    githubUrl: 'https://github.com/Bhuvo',
  },
  {
    id: 'auto-code-reviewer',
    title: 'Auto Code Reviewer',
    subtitle: 'Automated Pull Request & Code Quality Analysis',
    category: 'AI Developer Productivity',
    description:
      'An LLM-powered code review platform designed to analyze code changes and identify potential improvements automatically.',
    problemStatement:
      'Engineering teams spend substantial senior developer hours on repetitive syntax checks, code styling, and catching regression bugs in pull requests.',
    solution:
      'Created an autonomous code analysis pipeline connected directly to GitHub webhooks that decomposes diffs, queries LLM reasoning models, and posts actionable contextual inline PR reviews.',
    features: [
      'Automated code review on GitHub pull requests',
      'Seamless GitHub API webhook integration',
      'Context-aware AI-generated review comments',
      'Functional bug and logical issue identification',
      'Architectural and design pattern analysis',
      'Code quality, readability, and security feedback',
      'Actionable performance optimization recommendations',
    ],
    technologies: ['Python', 'FastAPI', 'GitHub API', 'OpenAI API', 'React'],
    architecture: {
      flow: [
        'GitHub Webhook Event',
        'FastAPI Worker',
        'Diff Parser & AST Analyzer',
        'LLM Review Evaluator',
        'GitHub PR Comments API',
      ],
      summary:
        'GitHub Event Trigger → FastAPI Server → AST Diff Parser → OpenAI Evaluator → Inline PR Reviews & Dashboard Insights.',
    },
    featured: true,
    badgeColor: 'from-cyan-400 to-blue-600',
    githubUrl: 'https://github.com/Bhuvo',
  },
  {
    id: 'foode',
    title: 'Foode',
    subtitle: 'Comprehensive Operations & Customer Dining Engine',
    category: 'Restaurant & Food Delivery Platform',
    description:
      'A food and restaurant management platform involving restaurant operations, delivery workflows, and customer-facing experiences.',
    problemStatement:
      'Hospitality venues frequently wrestle with disconnected systems for table reservations, takeaway orders, multi-zone floor layouts, and delivery logistics.',
    solution:
      'Designed a unified full-stack architecture coordinating real-time dining workflows, multi-zone space management (tables, halls, rooms, terraces), and synchronous billing analytics.',
    features: [
      'Centralized multi-venue restaurant management',
      'Customer ordering and delivery workflows',
      'Live order state management and status updates',
      'Dine-out preorder scheduling',
      'Takeaway workflow management',
      'Table, hall, room, and terrace space management',
      'Integrated billing and operational analytics',
    ],
    technologies: ['Flutter', 'Django', 'Django REST Framework', 'PostgreSQL'],
    architecture: {
      flow: [
        'Flutter Client (Staff & Customers)',
        'Django REST Framework APIs',
        'Order & Floor State Machine',
        'PostgreSQL Relational Storage',
      ],
      summary:
        'Flutter Mobile App → Django REST Framework Backend → Relational Transaction Engine → PostgreSQL Data Store.',
    },
    featured: true,
    badgeColor: 'from-emerald-400 to-teal-600',
    githubUrl: 'https://github.com/Bhuvo',
  },
  {
    id: 'grid-social-optimization',
    title: 'GridSocial Optimization',
    subtitle: 'High-Responsiveness Feed & Rendering Architecture',
    category: 'Application Performance Engineering',
    description:
      'Contributed to application optimization work focused on improving application performance and user experience.',
    problemStatement:
      'Complex social feeds and multi-layered grid layouts suffered from UI thread stutters, redundant widget builds, and frame drops during fast gestures.',
    solution:
      'Analyzed layout rebuild trees, restructured state listeners, and decoupled memory-intensive view computations to secure silky 60 FPS transitions.',
    features: [
      'GridSocial optimization contributions',
      'Performance-oriented mobile development',
      'Application responsiveness and render tree optimization',
      'Memory footprint reduction during intensive scrolling',
      'Smooth gesture and view transition stabilization',
    ],
    technologies: ['Flutter', 'Dart', 'DevTools Profiler', 'State Architecture'],
    featured: false,
    badgeColor: 'from-indigo-400 to-purple-600',
  },
  {
    id: 'superbill-optimization',
    title: 'Superbill Performance Optimization',
    subtitle: 'Medical & Billing Menu Latency Reduction',
    category: 'Performance Engineering',
    description:
      'Optimized Superbill template menu navigation to significantly improve the user experience.',
    problemStatement:
      'Superbill template menu navigation exhibited noticeable ~1000ms latency, creating friction for users executing repetitive high-frequency billing operations.',
    solution:
      'Identified navigation bottlenecks, eliminated redundant data serialization, implemented efficient memoization, and streamlined template rendering to achieve 98ms instantaneous response.',
    features: [
      'Template menu navigation performance overhaul',
      'Reduced latency from ~1000ms (1.7s peak) down to 98ms',
      'Over 90% latency reduction for high-frequency clinical workflows',
      'Eliminated UI thread stalls and unnecessary widget re-renders',
      'Smooth zero-lag navigation across extensive medical template hierarchies',
    ],
    achievement:
      'Navigation time improved from approximately 1 second (1.7s peak) to 98 milliseconds.',
    comparison: {
      metric: 'Navigation Latency',
      before: '~1,000ms (1.7s peak)',
      after: '98ms',
      unit: 'Latency (lower is better)',
      improvementText: '90%+ reduction in menu navigation delay',
    },
    technologies: ['Flutter', 'Dart', 'Memory Profiling', 'Performance Engineering'],
    featured: false,
    badgeColor: 'from-violet-500 to-pink-500',
  },
]
