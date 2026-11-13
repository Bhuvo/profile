export interface HighlightMetric {
  id: string
  title: string
  value: string
  numericValue?: number
  unit?: string
  suffix?: string
  description: string
  impact: string
  iconName: string
  glowColor: string
}

export const highlightsData: HighlightMetric[] = [
  {
    id: 'flutter-apps',
    title: 'Flutter Mobile Applications',
    value: '13+',
    numericValue: 13,
    suffix: '+',
    description: 'Production & client applications built across Android & iOS',
    impact: 'Architected robust state machines, offline persistence, and fluid cross-platform UX.',
    iconName: 'Smartphone',
    glowColor: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'flutter-web',
    title: 'Flutter Web Applications',
    value: '3',
    numericValue: 3,
    suffix: '',
    description: 'Responsive web products deployed with Flutter Web & Dart',
    impact: 'Engineered responsive multi-screen layouts and fast browser-side rendering.',
    iconName: 'Globe',
    glowColor: 'from-indigo-500 to-cyan-500',
  },
  {
    id: 'superbill-opt',
    title: 'Superbill Navigation Latency',
    value: '98ms',
    numericValue: 98,
    unit: 'ms',
    suffix: 'ms',
    description: 'Optimized from ~1000ms (1.7s peak) down to 98ms',
    impact: 'Cut clinical template navigation latency by over 90%, eliminating UI thread stalls.',
    iconName: 'Gauge',
    glowColor: 'from-cyan-400 to-emerald-400',
  },
  {
    id: 'full-stack-breadth',
    title: 'Multi-Tier Engineering',
    value: 'Full Stack',
    description: 'Mobile + Python APIs + AI Integrations + Databases',
    impact: 'Bridges client interfaces, FastAPI microservices, relational databases, and LLM inference pipelines.',
    iconName: 'Layers',
    glowColor: 'from-violet-500 to-pink-500',
  },
]
