export interface QAPair {
  keywords: string[]
  questionText: string
  answer: string
}

export const hemaKnowledgeBase: QAPair[] = [
  {
    keywords: ['about', 'who is', 'tell me about', 'summary', 'background', 'intro', 'profile'],
    questionText: 'Tell me about Hema.',
    answer:
      "Hemalatha P. is a Python Developer and AI/ML & Generative AI enthusiast based in Chennai, India. She is currently pursuing her M.Tech in Artificial Intelligence at SRM Institute of Science & Technology (2025–2027) and holds a B.Tech in Computer Science from Dr. M.G.R. Educational & Research Institute (CGPA 7.88). She has hands-on professional experience spanning Python backend development, REST APIs, Flutter cross-platform applications, and data visualization.",
  },
  {
    keywords: ['python', 'tech', 'technologies', 'skills', 'stack', 'languages', 'backend', 'fastapi', 'flask'],
    questionText: 'What Python technologies does she know?',
    answer:
      "Hema specializes in Python and its modern ecosystem:\n• Backend Frameworks: FastAPI, Flask, Django, and REST APIs\n• Data Science: Pandas, NumPy, Matplotlib, Exploratory Data Analysis, Data Cleaning\n• AI / ML: Scikit-learn, Model Evaluation, Computer Vision, and NLP\n• Generative AI: LangChain, LLMs, OpenAI API, Anthropic API, Embeddings, Vector Databases (Pinecone, FAISS, Chroma), and RAG pipelines\n• Other Languages: Java, Dart, JavaScript, SQL.",
  },
  {
    keywords: ['project', 'projects', 'portfolio', 'ilu', 'currency', 'chatbot', 'sales', 'work'],
    questionText: 'Explain her AI projects.',
    answer:
      "Hema has engineered 4 featured projects:\n1. ILU JOBS: AI-powered recruitment platform utilizing FastAPI, LangChain, LLMs, and Vector Embeddings for semantic resume parsing and job matching (Live at jobify-kappa-pearl.vercel.app).\n2. Indian Currency Detection: Computer vision and ML pipeline classifying Indian banknotes with 91.4% accuracy using Scikit-learn and modular OOP.\n3. Healthcare AI Chatbot: NLP conversational assistant built on Flask REST API achieving 88% intent accuracy (educational/software project).\n4. Sales Data Analysis Dashboard: High-volume data processing pipeline analyzing 10,000+ records with Pandas and delivering live visual analytics via APIs (achieved 35% time reduction).",
  },
  {
    keywords: ['experience', 'career', 'job', 'work experience', 'company', 'history', 'role', 'skipd', 'hagnos', 'tcr', 'nsic'],
    questionText: 'What is her professional experience?',
    answer:
      "Hema brings 4 verified career and internship experiences:\n• Telesales Executive at Hagnos Marketing & Solutions (Dec 2024 – Jul 2025): Client interaction, structured data organization, teamwork under pressure.\n• Junior Software Developer at Skipd Technologies (May 2023 – Jun 2024): Built Python backend services, REST APIs, and Flutter mobile features in agile sprints.\n• App Development Intern at NSIC (Jul 2023 – Sep 2023): SDLC workflows, module debugging, and software testing.\n• Python Intern — Data Visualisation at TCR Innovation (Oct 2022 – Jan 2023): Automated data cleaning, Flask REST APIs, Matplotlib dashboards, reducing processing time by 35% via vectorized Pandas operations.",
  },
  {
    keywords: ['study', 'studying', 'education', 'degree', 'mtech', 'btech', 'srm', 'college', 'academic'],
    questionText: 'What is she currently studying?',
    answer:
      "She is currently pursuing her M.Tech in Artificial Intelligence at SRM Institute of Science & Technology (2025–2027), focusing on advanced neural networks, machine learning theory, NLP, and modern generative AI architectures. She previously graduated with a B.Tech in Computer Science from Dr. M.G.R. Educational & Research Institute (2023) with a 7.88 CGPA.",
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'message', 'linkedin', 'github', 'phone', 'location'],
    questionText: 'How can I contact her?',
    answer:
      "You can connect directly with Hemalatha via:\n• Email: hemalathaofficial1124@gmail.com\n• LinkedIn: linkedin.com/in/hemalatha-p-837462424/\n• GitHub: github.com/hema-official\n• Location: Chennai, India.\nShe is open to Python Developer, AI Engineer, and Generative AI Developer roles!",
  },
  {
    keywords: ['certifications', 'certificates', 'courses'],
    questionText: 'What certifications does she hold?',
    answer:
      "Hema has earned certifications in:\n1. Full Stack Java Development\n2. Web Development — HTML, CSS, JavaScript, Node.js\n3. Web Designing & .NET Development.",
  },
  {
    keywords: ['resume', 'cv', 'download'],
    questionText: 'Where can I find her resume?',
    answer:
      "You can download Hemalatha's verified resume using the 'DOWNLOAD RESUME' button in the hero navigation bar or directly from the link '/resume.pdf' on this website.",
  },
]

export const defaultSuggestedQuestions = [
  'Tell me about Hema.',
  'What Python technologies does she know?',
  'Explain her AI projects.',
  'What is her professional experience?',
  'What is she currently studying?',
  'How can I contact her?',
]

export function answerQuery(query: string): string {
  const normalized = query.toLowerCase().trim()
  if (!normalized) {
    return "I am HEMA AI, your intelligent guide to Hemalatha's engineering portfolio. Ask me about her Python background, AI projects, experience, or education!"
  }

  // Exact or close match with questionText
  for (const item of hemaKnowledgeBase) {
    if (normalized.includes(item.questionText.toLowerCase())) {
      return item.answer
    }
  }

  // Match keyword hits
  let bestMatch: QAPair | null = null
  let maxScore = 0

  for (const item of hemaKnowledgeBase) {
    let score = 0
    for (const kw of item.keywords) {
      if (normalized.includes(kw)) {
        score += kw.length
      }
    }
    if (score > maxScore) {
      maxScore = score
      bestMatch = item
    }
  }

  if (bestMatch && maxScore > 2) {
    return bestMatch.answer
  }

  return "I don't have verified information regarding that specific query in Hemalatha's portfolio. You can ask me about her Python skills, AI/ML projects (ILU JOBS, Currency Detection, Healthcare Chatbot, Sales Analytics), her work experience at Skipd Technologies or TCR Innovation, her M.Tech at SRM, or reach out directly to her at hemalathaofficial1124@gmail.com."
}

