export interface SkillCategory {
  id: string
  title: string
  subtitle: string
  iconName: string
  color: string
  accentBorder: string
  items: {
    name: string
    highlight?: boolean
    description?: string
  }[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Core foundations for scalable algorithms and software engineering.',
    iconName: 'code',
    color: '#8B5CF6',
    accentBorder: 'rgba(139, 92, 246, 0.4)',
    items: [
      { name: 'Python', highlight: true, description: 'Primary language for AI/ML, backend APIs, and data science' },
      { name: 'Java', description: 'Strong grounding in OOP and enterprise application architectures' },
      { name: 'Dart', description: 'Cross-platform mobile application development with Flutter' },
      { name: 'JavaScript', description: 'Modern web scripting and dynamic interactive interfaces' },
      { name: 'SQL', description: 'Relational schema design, queries, and transaction management' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    subtitle: 'Algorithms and mathematical models that learn from structured data.',
    iconName: 'brain',
    color: '#67E8F9',
    accentBorder: 'rgba(103, 232, 249, 0.4)',
    items: [
      { name: 'Machine Learning', highlight: true, description: 'Supervised and unsupervised learning algorithms' },
      { name: 'Natural Language Processing', highlight: true, description: 'Text tokenization, sentiment analysis, and intent parsing' },
      { name: 'Computer Vision', highlight: true, description: 'Image preprocessing, feature extraction, and classification' },
      { name: 'Scikit-learn', description: 'Model pipelines, preprocessing, regression, and classification' },
      { name: 'Model Evaluation', description: 'Confusion matrices, precision, recall, and ROC-AUC curves' },
    ],
  },
  {
    id: 'gen-ai',
    title: 'Generative AI & LLMs',
    subtitle: 'Modern neural generation, embeddings, and context-augmented agents.',
    iconName: 'sparkles',
    color: '#C4B5FD',
    accentBorder: 'rgba(196, 181, 253, 0.4)',
    items: [
      { name: 'Generative AI', highlight: true, description: 'Foundation models, generation dynamics, and multimodal AI' },
      { name: 'Large Language Models (LLMs)', highlight: true, description: 'Context windows, reasoning capabilities, and prompt architectures' },
      { name: 'OpenAI API', description: 'GPT integration, function calling, and structured outputs' },
      { name: 'Anthropic API', description: 'Claude models integration and long-context processing' },
      { name: 'LangChain', highlight: true, description: 'Chains, document loaders, and vector retrieval pipelines' },
      { name: 'Prompt Engineering', description: 'Few-shot prompting, chain-of-thought, and system guidelines' },
      { name: 'Embeddings', description: 'Dense vector representations of semantic text and code' },
      { name: 'Retrieval-Augmented Generation (RAG)', highlight: true, description: 'Grounded generation with external contextual vector indices' },
      { name: 'Pinecone', description: 'Managed cloud-native vector index querying' },
      { name: 'FAISS', description: 'High-performance local vector similarity search' },
      { name: 'Chroma', description: 'Lightweight open-source vector database' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'High-throughput, clean RESTful architectures and modular services.',
    iconName: 'server',
    color: '#8B5CF6',
    accentBorder: 'rgba(139, 92, 246, 0.4)',
    items: [
      { name: 'Django', description: 'Batteries-included full-featured Python web framework' },
      { name: 'Flask', description: 'Lightweight microservices and RESTful API endpoints' },
      { name: 'FastAPI', highlight: true, description: 'Modern, high-performance async Python APIs with Pydantic validation' },
      { name: 'REST APIs', highlight: true, description: 'Stateless JSON endpoints, status codes, and HTTP verbs' },
      { name: 'Object-Oriented Programming (OOP)', description: 'Polymorphism, encapsulation, inheritance, and modular codebases' },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    subtitle: 'Extracting clean statistical insights from complex real-world data.',
    iconName: 'bar-chart-3',
    color: '#67E8F9',
    accentBorder: 'rgba(103, 232, 249, 0.4)',
    items: [
      { name: 'Pandas', highlight: true, description: 'DataFrames, series manipulation, vectorized operations' },
      { name: 'NumPy', highlight: true, description: 'Multidimensional arrays, linear algebra, vector math' },
      { name: 'Matplotlib', description: 'Static and interactive visual figures, distributions, and trends' },
      { name: 'Exploratory Data Analysis (EDA)', description: 'Statistical profiling, hypothesis testing, and pattern discovery' },
      { name: 'Data Cleaning', description: 'Missing value handling, outlier filtering, and data normalization' },
    ],
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile Technologies',
    subtitle: 'Cross-platform interfaces connecting users to intelligent backends.',
    iconName: 'smartphone',
    color: '#C4B5FD',
    accentBorder: 'rgba(196, 181, 253, 0.4)',
    items: [
      { name: 'HTML5', description: 'Semantic, accessible document structure' },
      { name: 'CSS3', description: 'Modern styling, layouts, and responsive transitions' },
      { name: 'JavaScript', description: 'Client-side behavior, DOM manipulation, asynchronous fetch' },
      { name: 'Node.js', description: 'JavaScript server runtime and package ecosystems' },
      { name: 'Flutter', highlight: true, description: 'Cross-platform mobile application engineering with Dart' },
    ],
  },
  {
    id: 'dev-tools',
    title: 'Development Tools & Databases',
    subtitle: 'Version control, database management, and agile developer workflows.',
    iconName: 'cpu',
    color: '#8B5CF6',
    accentBorder: 'rgba(139, 92, 246, 0.4)',
    items: [
      { name: 'Git', highlight: true, description: 'Branching strategies, commit history, and merge conflict resolution' },
      { name: 'GitHub', highlight: true, description: 'Remote repositories, collaborative workflows, and code reviews' },
      { name: 'SQL Databases', description: 'Relational schemas, queries, indexes, and integrity constraints' },
    ],
  },
]

