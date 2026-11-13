export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  duration: string
  periodType: 'current' | 'past'
  isHighlighted?: boolean
  highlightBadge?: string
  transferableFocus?: string
  description: string[]
  technologies: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'hagnos',
    role: 'Telesales Executive',
    company: 'Hagnos Marketing & Solutions Pvt. Ltd.',
    location: 'Chennai, India',
    duration: 'December 2024 – July 2025',
    periodType: 'past',
    transferableFocus: 'Communication & Data Systems',
    description: [
      'Managed 50+ daily client interactions, establishing structured record-keeping workflows and client relationship management.',
      'Demonstrated consistent ability to work under high pressure, meet rigorous business milestones, and synchronize across cross-functional teams.',
      'Maintained accurate, verified client databases with high data integrity, applying structured data organization practices directly transferable to modern data-driven software pipelines.',
    ],
    technologies: ['CRM Systems', 'Data Organization', 'Client Relations', 'Agile Operations'],
  },
  {
    id: 'skipd',
    role: 'Junior Software Developer',
    company: 'Skipd Technologies',
    location: 'Chennai, India',
    duration: 'May 2023 – June 2024',
    periodType: 'past',
    isHighlighted: true,
    highlightBadge: 'Key Engineering Role',
    description: [
      'Architected, developed, and maintained cross-platform application features with responsive frontend flows using Flutter.',
      'Engineered and integrated Python-based backend services and high-efficiency REST API endpoints supporting core application functionality.',
      'Executed systematic debugging, unit testing, and continuous quality checks within fast-paced agile development sprint cycles.',
      'Collaborated closely with frontend engineers, designers, and project stakeholders to deliver stable, scalable features.',
    ],
    technologies: ['Python', 'REST APIs', 'Flutter', 'Dart', 'Git', 'Agile Workflows', 'Debugging'],
  },
  {
    id: 'nsic',
    role: 'App Development Intern',
    company: 'NSIC — National Small Industries Corporation',
    location: 'Chennai, India',
    duration: 'July 2023 – September 2023',
    periodType: 'past',
    description: [
      'Contributed actively across the software development lifecycle (SDLC), including hands-on feature coding, testing, and troubleshooting.',
      'Assisted with comprehensive module documentation, interface architecture specifications, and code reviews under senior engineering supervision.',
      'Conducted test cases and quality assurance passes on modular application components in a structured government enterprise ecosystem.',
    ],
    technologies: ['Application Development', 'SDLC', 'Module Documentation', 'Software Testing', 'Quality Assurance'],
  },
  {
    id: 'tcr',
    role: 'Python Intern — Data Visualisation',
    company: 'TCR Innovation',
    location: 'Chennai, India',
    duration: 'October 2022 – January 2023',
    periodType: 'past',
    isHighlighted: true,
    highlightBadge: '35% Performance Optimization',
    description: [
      'Built dynamic, interactive visual dashboards leveraging Python, Pandas, and Matplotlib to present actionable data insights.',
      'Exposed processed analytics data through modular Flask REST API endpoints for seamless consumption by web clients.',
      'Performed rigorous Exploratory Data Analysis (EDA) and data cleansing on multi-thousand row real-world datasets.',
      'Achieved an estimated 35% processing time reduction by refactoring procedural data loops into vectorized Pandas operations.',
      'Applied Object-Oriented Programming (OOP) principles to construct maintainable, modular data ingestion pipelines maintained with Git.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Flask', 'REST APIs', 'OOP', 'Data Cleaning', 'Git'],
  },
]

