import type { ExperienceItem } from '../types'

export const experiences: ExperienceItem[] = [
  {
    id: 'dataterrain',
    company: 'DataTerrain INC',
    role: 'Software Developer',
    duration: 'Professional Experience',
    location: 'Chennai, India',
    isCurrent: true,
    summary:
      'Contributed to software engineering, Flutter mobile application development, and mission-critical performance optimization across enterprise products.',
    contributions: [
      'Worked on software development and production application improvements.',
      'Contributed to application optimization and performance improvements.',
      'Worked on Flutter-based application development.',
      'Worked on Superbill template menu navigation performance improvement.',
    ],
    keyResponsibilities: [
      'Production application engineering and architectural improvement.',
      'Enterprise Flutter mobile client development and state optimization.',
      'High-impact latency reduction and template rendering optimization.',
      'Collaboration on AI application prototyping and performance profiling.',
    ],
    achievement:
      'Improved Superbill template menu navigation performance from approximately 1 second to 98 milliseconds.',
    technologies: ['Flutter', 'Dart', 'Performance Profiling', 'State Management'],
  },
  {
    id: 'timesmed',
    company: 'TimesMed',
    role: 'Flutter Developer',
    duration: 'April 2024 – May 2025',
    location: 'Chennai, India',
    summary:
      'Engineered scalable cross-platform mobile applications and healthcare digital products across telemedicine and clinical booking platforms, driving significant performance optimizations and user engagement.',
    contributions: [
      'Delivered 5+ mobile apps and 3 websites across healthcare, telemedicine, and utility domains (including TimesMed Focus and TimesMed Wego).',
      'Engineered real-time doctor-patient consultation and appointment booking systems utilizing WebSockets, Firebase, and REST APIs.',
      'Integrated REST APIs, GraphQL endpoints, and third-party healthcare SDKs; optimized app performance by 25% through targeted memory profiling and architectural refactoring.',
      'Architected scalable Flutter state management (BLoC / Provider) and boosted UI/UX responsiveness scores by 35%.',
    ],
    keyResponsibilities: [
      'Deliver production-grade cross-platform mobile applications across healthcare and clinical domains.',
      'Develop real-time consultation features with bidirectional WebSockets and push notifications.',
      'Optimize client-side performance, state management (BLoC / Provider), and network latency.',
      'Collaborate with backend teams to integrate REST APIs, GraphQL, and cloud infrastructure.',
    ],
    achievement:
      'Delivered 5+ production mobile apps with 40% user engagement growth, 100% on-time milestone delivery, and 50% appointment wait-time reduction.',
    achievements: [
      'Delivered 5+ production mobile apps and 3 websites with 40% user engagement growth and 100% on-time milestone delivery.',
      '50% reduction in appointment wait times on TimesMed Focus telemedicine platform.',
      '45% booking efficiency gain on TimesMed Wego healthcare scheduling platform.',
    ],
    technologies: ['Flutter', 'Dart', 'WebSockets', 'Firebase', 'REST APIs', 'PostgreSQL', 'Express.js', 'AWS'],
  },
  {
    id: 'loopd',
    company: 'LOOPD DIGITAL SOLUTION',
    role: 'Co-Founder',
    duration: 'February 2023 – November 2023',
    summary:
      'Co-founded a digital solutions venture, driving architecture, client software solutions, and cross-platform mobile product execution.',
    contributions: [
      'Co-founded a digital solutions initiative.',
      'Participated in developing software solutions.',
      'Worked on application development and digital product execution.',
    ],
    technologies: ['Product Strategy', 'Application Development', 'Mobile Engineering', 'Dart', 'Flutter'],
  },
  {
    id: 'tcr',
    company: 'TCR Innovation',
    role: 'Data Visualization Intern',
    duration: 'August 2022 – November 2022',
    summary:
      'Acquired practical exposure to data analytics, visual exploratory data analysis, and dashboard techniques.',
    contributions: [
      'Worked on data visualization-related activities.',
      'Gained practical exposure to data analysis and visualization concepts.',
    ],
    technologies: ['Data Visualization', 'Python', 'Exploratory Data Analysis', 'Dashboarding'],
  },
]
