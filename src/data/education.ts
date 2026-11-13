export interface EducationItem {
  id: string
  degree: string
  field: string
  institution: string
  duration: string
  status?: string
  score?: string
  isHighlighted?: boolean
  description: string
  iconName: string
}

export const educationList: EducationItem[] = [
  {
    id: 'srm-mtech',
    degree: 'M.Tech',
    field: 'Artificial Intelligence',
    institution: 'SRM Institute of Science & Technology',
    duration: '2025 – 2027',
    status: 'Currently Pursuing',
    isHighlighted: true,
    description:
      'Advancing theoretical and applied knowledge in advanced machine learning, deep neural architectures, natural language processing, computer vision, and modern generative AI systems.',
    iconName: 'graduation-cap',
  },
  {
    id: 'mgr-btech',
    degree: 'B.Tech',
    field: 'Computer Science and Engineering',
    institution: 'Dr. M.G.R. Educational & Research Institute',
    duration: '2019 – 2023',
    status: 'Graduated',
    score: 'CGPA: 7.88 / 10',
    description:
      'Built a comprehensive foundation in data structures, algorithms, operating systems, database management, object-oriented design, and software engineering methodologies.',
    iconName: 'book-open',
  },
  {
    id: 'jaigopal-school',
    degree: 'Higher Secondary & Secondary Education',
    field: 'Science & Computer Foundations',
    institution: 'Jaigopal Garodia Girls School',
    duration: 'Completed',
    status: 'Graduated',
    score: 'HSC: 75% · SSLC: 72%',
    description:
      'Completed foundational high school education with strong emphasis on mathematics, physical sciences, and introductory computing.',
    iconName: 'award',
  },
]

