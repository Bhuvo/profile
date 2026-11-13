export interface ProjectItem {
  id: string
  title: string
  category: string
  tagline: string
  description: string
  technologies: string[]
  metrics?: { label: string; value: string }[]
  features: string[]
  problemStatement: string
  solution: string
  architecture: {
    steps: string[]
    description: string
  }
  collaborativeNotice?: string
  disclaimer?: string
  liveUrl?: string
  githubUrl?: string
  accentColor: string
  gradient: string
}

export const projects: ProjectItem[] = [
  {
    id: 'ilu-jobs',
    title: 'ILU JOBS',
    category: 'AI-Powered Recruitment Platform',
    tagline: 'Intelligent job discovery, ATS resume parsing, and semantic matching.',
    description:
      'An AI-powered recruitment platform designed to simplify job discovery, resume analysis, job matching, and application management using modern LLMs and semantic embeddings.',
    technologies: ['Python', 'FastAPI', 'REST API', 'LLMs', 'LangChain', 'Embeddings', 'Vector Databases'],
    metrics: [
      { label: 'Pipeline Type', value: 'Semantic Embeddings' },
      { label: 'Backend Architecture', value: 'FastAPI Async' },
      { label: 'AI Layer', value: 'LangChain & LLMs' },
    ],
    features: [
      'Intelligent semantic job search beyond keyword matching',
      'ATS resume analysis with structured skills extraction',
      'AI-assisted resume optimization suggestions',
      'Unified multi-source job aggregation & categorization',
      'End-to-end applicant tracking workflow system',
      'Resume-to-job vector similarity matching engine',
      'LangChain orchestration for intelligent query parsing',
    ],
    problemStatement:
      'Job seekers and recruiters face significant friction with standard keyword searches and rigid ATS filters that fail to capture semantic skill alignment and contextual relevance.',
    solution:
      'Engineered an intelligent FastAPI backend integrating vector embeddings and LLM reasoning via LangChain to analyze resumes contextually and compute cosine similarity matches against job criteria.',
    architecture: {
      steps: [
        'User Interface (Web Client)',
        'FastAPI Async Backend API',
        'AI Processing & Prompt Layer',
        'LLM & Semantic Embeddings',
        'Vector Similarity Matching Engine',
        'Job Data Aggregation Sources',
      ],
      description:
        'Client requests route through FastAPI endpoints into a LangChain pipeline, generating dense embeddings for resumes and queries, which query vector indexes to return scored job matches.',
    },
    collaborativeNotice:
      'Developed as a collaborative project contribution focusing on backend API endpoints, AI processing workflows, and vector matching pipelines.',
    liveUrl: 'https://jobify-kappa-pearl.vercel.app/',
    githubUrl: 'https://github.com/hema-official',
    accentColor: '#8B5CF6',
    gradient: 'from-purple-900/40 via-violet-900/20 to-cyan-900/30',
  },
  {
    id: 'currency-detection',
    title: 'Indian Currency Detection',
    category: 'Computer Vision & Machine Learning',
    tagline: 'Automated banknote feature extraction and classification pipeline.',
    description:
      'An end-to-end machine learning pipeline designed to classify Indian currency notes using image features, robust preprocessing, and machine learning classifiers.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Computer Vision', 'OOP', 'Git'],
    metrics: [
      { label: 'Classification Accuracy', value: '91.4%' },
      { label: 'Architecture', value: 'Modular OOP' },
      { label: 'Evaluation Metrics', value: 'Precision / Recall' },
    ],
    features: [
      'Multi-denomination Indian currency banknote classification',
      'Automated image preprocessing, grayscale conversion, and resizing',
      'Statistical and texture image feature extraction',
      'Scikit-learn classification models with hyperparameter tuning',
      'Rigorous model evaluation with confusion matrices and F1-score measurement',
      'Clean modular Object-Oriented design for extensible pipeline stages',
    ],
    problemStatement:
      'Authenticating and recognizing currency denominations programmatically requires consistent feature extraction that remains robust against variations in lighting, folds, and surface wear.',
    solution:
      'Built a modular Python ML pipeline that extracts key visual descriptors, standardizes input images, and trains supervised classifiers to accurately identify Indian currency notes with high statistical confidence.',
    architecture: {
      steps: [
        'Input Currency Image Capture',
        'Noise Filtering & Standardization',
        'Feature Vector Extraction',
        'Trained Scikit-learn Classifier',
        'Denomination Output & Confidence Score',
      ],
      description:
        'Images pass through preprocessing and normalization routines, followed by feature extraction, feeding into a tuned Scikit-learn classifier providing 91.4% accuracy.',
    },
    githubUrl: 'https://github.com/hema-official',
    accentColor: '#67E8F9',
    gradient: 'from-cyan-900/40 via-purple-900/20 to-slate-900/40',
  },
  {
    id: 'healthcare-chatbot',
    title: 'Healthcare AI Chatbot',
    category: 'Artificial Intelligence & NLP',
    tagline: 'Conversational assistant with automated intent recognition.',
    description:
      'An NLP-based healthcare conversational assistant engineered to provide structured informational responses through a lightweight Flask REST API backend.',
    technologies: ['Python', 'Flask', 'REST API', 'NLP', 'OOP', 'Git'],
    metrics: [
      { label: 'Intent Recognition Accuracy', value: '88%' },
      { label: 'Backend Framework', value: 'Flask RESTful' },
      { label: 'Response Latency', value: '<120ms' },
    ],
    features: [
      'Natural language query parsing and tokenization',
      'Rule-based and probabilistic intent recognition classifier',
      'Automated informational response generation for common health inquiries',
      'Modular Flask REST API facilitating client integration',
      'Extensible OOP architecture for intent handlers and context tracking',
      'Graceful fallback responses for out-of-scope queries',
    ],
    problemStatement:
      'Patients seeking routine health wellness guidance frequently struggle to find quick, structured preliminary information prior to consulting medical professionals.',
    solution:
      'Developed a modular conversational NLP pipeline in Python with Flask REST endpoints, recognizing user symptoms and health questions to return structured guidance with 88% intent accuracy.',
    architecture: {
      steps: [
        'Natural Language User Query',
        'Text Preprocessing & Lemmatization',
        'NLP Intent Recognition Engine',
        'Flask REST Service Handler',
        'Contextual Educational Response',
      ],
      description:
        'User queries are tokenized, normalized, and classified into predefined health intent categories, serving structured response payloads via Flask REST endpoints.',
    },
    disclaimer:
      'IMPORTANT DISCLAIMER: This project was developed strictly for academic, software engineering, and educational purposes. It is NOT a clinically validated medical device and does NOT provide medical advice or diagnosis. Always consult certified healthcare professionals for health concerns.',
    githubUrl: 'https://github.com/hema-official',
    accentColor: '#C4B5FD',
    gradient: 'from-violet-950/40 via-fuchsia-900/20 to-purple-900/30',
  },
  {
    id: 'sales-analytics',
    title: 'Sales Data Analysis & Visualisation',
    category: 'Data Science & Business Intelligence',
    tagline: 'Automated exploratory data analysis and live API visualization delivery.',
    description:
      'An interactive sales analytics dashboard that cleans, processes, and analyzes high-volume business transactions, generating live visual insights served through REST APIs.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'FastAPI', 'REST API', 'Git'],
    metrics: [
      { label: 'Records Analyzed', value: '10,000+' },
      { label: 'Manual Effort Reduction', value: '~60%' },
      { label: 'Computation Speedup', value: '35% via Vectorization' },
    ],
    features: [
      'Ingestion and validation of 10,000+ transactional sales records',
      'Automated data cleaning, outlier handling, and missing-value imputation',
      'Exploratory data analysis uncovering revenue trends and seasonality',
      'Vectorized Pandas data operations achieving high processing throughput',
      'Dynamic Matplotlib chart generation served over REST APIs',
      'Automated PDF / visual reporting workflow saving recurring manual effort',
    ],
    problemStatement:
      'Manual compilation of quarterly sales figures across thousands of raw transactional records created recurring operational overhead, delayed decision-making, and increased reporting error rates.',
    solution:
      'Constructed an automated Python data pipeline using vectorized Pandas operations and FastAPI endpoints to clean datasets, aggregate key KPIs, and stream high-resolution charts on demand.',
    architecture: {
      steps: [
        'Raw Sales Transaction CSV / DB',
        'Pandas Vectorized Cleaning & Filtering',
        'Statistical Aggregation & KPI Computation',
        'Matplotlib Chart Rendering Engine',
        'FastAPI REST Response Delivery',
      ],
      description:
        'Transactional records are ingested into memory, sanitized via vectorized pandas routines, transformed into summary analytics, and exposed as visual and JSON payloads via FastAPI.',
    },
    githubUrl: 'https://github.com/hema-official',
    accentColor: '#8B5CF6',
    gradient: 'from-purple-950/40 via-indigo-900/20 to-cyan-950/30',
  },
]

