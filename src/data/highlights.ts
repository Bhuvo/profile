export interface HighlightMetric {
  id: string
  number: string
  suffix?: string
  label: string
  context: string
  accentColor: string
  category: 'career' | 'ml' | 'data' | 'nlp'
}

export const highlightsData: HighlightMetric[] = [
  {
    id: 'exp-count',
    number: '4',
    label: 'Professional Experiences',
    context: 'Across software development, Python backend, mobile apps & technical roles',
    accentColor: '#8B5CF6',
    category: 'career',
  },
  {
    id: 'currency-acc',
    number: '91.4',
    suffix: '%',
    label: 'Currency Detection Accuracy',
    context: 'Machine learning classification pipeline for Indian currency banknotes',
    accentColor: '#67E8F9',
    category: 'ml',
  },
  {
    id: 'projects-count',
    number: '4',
    label: 'Featured Engineering Projects',
    context: 'Covering AI platforms, NLP chatbots, computer vision & data dashboards',
    accentColor: '#C4B5FD',
    category: 'career',
  },
  {
    id: 'records-analyzed',
    number: '10,000',
    suffix: '+',
    label: 'Records Cleaned & Analyzed',
    context: 'Business transaction records processed in sales analytics pipeline',
    accentColor: '#67E8F9',
    category: 'data',
  },
  {
    id: 'chatbot-acc',
    number: '88',
    suffix: '%',
    label: 'Healthcare Intent Accuracy',
    context: 'NLP-based conversational assistant with Flask REST API backend',
    accentColor: '#8B5CF6',
    category: 'nlp',
  },
  {
    id: 'time-reduction',
    number: '35',
    suffix: '%',
    label: 'Data Processing Time Reduction',
    context: 'Achieved at TCR Innovation via vectorized Pandas optimization',
    accentColor: '#C4B5FD',
    category: 'data',
  },
]

