export interface PersonalInfo {
  name: string
  preferredName: string
  title: string
  heroHeadline: string
  heroHeadlineHighlight: string
  heroDescription: string
  roles: string[]
  status: string
  aboutIntro: string[]
  careerInterests: string[]
  stats: {
    label: string
    value: string
    subtext: string
    highlight?: boolean
  }[]
}

export interface SocialLinks {
  github: string
  linkedin: string
  email: string
  resumeUrl: string
}

export interface SkillCategory {
  title: string
  subtitle: string
  iconName: string
  color: string
  borderColor: string
  skills: {
    name: string
    level?: string
    icon?: string
    highlight?: boolean
  }[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  duration?: string
  location?: string
  isCurrent?: boolean
  summary: string
  contributions: string[]
  achievement?: string
  technologies: string[]
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  problemStatement?: string
  solution?: string
  features: string[]
  technologies: string[]
  architecture?: {
    flow: string[]
    summary: string
  }
  achievement?: string
  comparison?: {
    metric: string
    before: string
    after: string
    unit: string
    improvementText: string
  }
  githubUrl?: string
  liveDemoUrl?: string
  featured: boolean
  badgeColor?: string
}

export interface EducationItem {
  degree: string
  institution: string
  duration: string
  cgpa: string
  location?: string
  focusAreas: string[]
}

export interface FocusTopic {
  title: string
  description: string
  category: string
  iconName: string
  tags: string[]
}

export interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  topics?: string[]
}

export interface ChatMessage {
  id: string
  sender: 'user' | 'assistant'
  text: string
  timestamp: string
  suggestions?: string[]
}
