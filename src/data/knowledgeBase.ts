export interface KnowledgeEntry {
  keywords: string[]
  question: string
  answer: string
  suggestions?: string[]
}

export const aiKnowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ['who', 'about', 'background', 'intro', 'overview', 'bhuvanesh', 'bhuvaneswaran', 'summary'],
    question: 'Who is Bhuvaneswaran S?',
    answer:
      "Bhuvaneswaran S is a Software Developer, AI Engineer, and GenAI Developer. He builds intelligent applications, AI-powered products, scalable backend systems, and modern digital experiences. With a strong foundation in Flutter and Dart, he has built 13+ mobile applications and 3 Flutter websites, and is expanding his depth into Python, LLMs, RAG, and AI agents.",
    suggestions: ['What are his core technical skills?', 'Tell me about his work experience', 'What projects has he built?'],
  },
  {
    keywords: ['skills', 'tech', 'stack', 'technologies', 'languages', 'tools', 'python', 'flutter', 'fastapi', 'llm'],
    question: 'What are his primary technical skills?',
    answer:
      "Bhuvaneswaran's technical arsenal includes:\n• **Programming**: Python, Dart, JavaScript, TypeScript\n• **AI & GenAI**: LLMs, OpenAI API, Prompt Engineering, RAG, LangChain, AI Agents, Hugging Face\n• **Backend**: FastAPI, Django, REST APIs, WebSockets, PostgreSQL, Firebase\n• **Frontend & Mobile**: Flutter, React.js, Tailwind CSS, HTML/CSS\n• **DevOps & Tools**: Git, GitHub, Docker, Vercel, Postman, VS Code",
    suggestions: ['Tell me about his AI & GenAI projects', 'What is his experience with Flutter?', 'How can I contact him?'],
  },
  {
    keywords: ['experience', 'work', 'job', 'company', 'dataterrain', 'timesmed', 'loopd', 'tcr', 'career', 'history'],
    question: 'Where has Bhuvaneswaran worked?',
    answer:
      "His professional journey includes:\n1. **DataTerrain INC** (Software Developer, Professional Experience): Worked on software development, Flutter application engineering, production performance optimization, and improved Superbill template menu navigation latency from ~1s to 98ms.\n2. **TimesMed** (Flutter Developer, April 2024 – May 2025): Delivered 5+ healthcare & telemedicine mobile applications and 3 websites, optimizing performance by 25% and cutting appointment wait times by 50%.\n3. **LOOPD DIGITAL SOLUTION** (Co-Founder, Feb 2023 – Nov 2023): Co-founded a digital solutions initiative delivering application development and digital products.\n4. **TCR Innovation** (Data Visualization Intern, Aug 2022 – Nov 2022): Worked on data analytics and visualization concepts.",
    suggestions: ['What did he build at TimesMed?', 'Tell me about the Superbill optimization', 'What projects has he built?'],
  },
  {
    keywords: ['timesmed', 'timemed', 'telemedicine', 'healthcare', 'focus', 'wego'],
    question: 'What did Bhuvaneswaran do at TimesMed?',
    answer:
      "At TimesMed (April 2024 – May 2025), Bhuvaneswaran served as a **Flutter Developer**. He delivered 5+ production mobile apps and 3 websites across healthcare, telemedicine, and utility domains (including TimesMed Focus and TimesMed Wego). He engineered real-time consultation features using WebSockets and Firebase, cut appointment wait times by 50%, and boosted UI/UX responsiveness scores by 35% with clean BLoC/Provider architecture.",
    suggestions: ['Tell me about his DataTerrain experience', 'What are his primary technical skills?', 'What projects has he built?'],
  },
  {
    keywords: ['superbill', 'optimization', 'performance', 'latency', '98ms', 'benchmark', 'speed'],
    question: 'How did he optimize the Superbill navigation?',
    answer:
      "At DataTerrain INC, Bhuvaneswaran tackled a high-latency issue in the Superbill template menu navigation. By profiling render bottlenecks, eliminating redundant serialization, and optimizing widget state lifecycles, he successfully cut navigation time from approximately 1 second (1.7s peak) down to 98 milliseconds — an over 90% latency reduction!",
    suggestions: ['Tell me about Jobify', 'Tell me about Auto Code Reviewer', 'View his work experience'],
  },
  {
    keywords: ['projects', 'built', 'portfolio', 'jobify', 'reviewer', 'foode', 'github'],
    question: 'What featured projects has he built?',
    answer:
      "Key projects include:\n• **Jobify**: AI-powered recruitment platform with resume parsing, 13-section builder, ATS scoring, and candidate-job matching (Flutter, Python, FastAPI, OpenAI API).\n• **Auto Code Reviewer**: LLM-driven code review platform analyzing GitHub PRs for bugs, architecture, and code quality.\n• **IPTrace**: Advanced IP Geolocation & Visitor Analytics platform (Python, Flask, SQLite, Chart.js, Leaflet.js).\n• **Foode**: Restaurant and food delivery engine managing real-time orders, space/table reservations, and billing (Flutter, Django, PostgreSQL).\n• **Superbill Performance Optimization**: High-performance medical menu navigation latency reduction from ~1000ms to 98ms.",
    suggestions: ['Tell me more about Jobify', 'Tell me about Auto Code Reviewer', 'Can I download his resume?'],
  },
  {
    keywords: ['jobify', 'recruitment', 'ats', 'resume analysis'],
    question: 'What is Jobify?',
    answer:
      "Jobify is an AI-powered recruitment platform designed to simplify job discovery, resume analysis, and candidate matching. It features ATS compatibility scoring, automated skill gap insights, an interactive 13-section resume builder, and an architecture spanning Flutter/Next.js frontend, FastAPI backend, and OpenAI models.",
    suggestions: ['What technologies were used in Jobify?', 'Tell me about Auto Code Reviewer', 'Download his resume'],
  },
  {
    keywords: ['reviewer', 'code reviewer', 'auto code reviewer', 'github pr', 'pull request'],
    question: 'What is the Auto Code Reviewer project?',
    answer:
      "Auto Code Reviewer is an LLM-powered developer productivity tool that connects to GitHub webhooks. When pull requests are created, it analyzes code diffs, assesses architectural patterns and potential runtime bugs, and generates context-aware inline code review comments.",
    suggestions: ['What stack does Auto Code Reviewer use?', 'Tell me about IPTrace', 'Contact Bhuvaneswaran'],
  },
  {
    keywords: ['iptrace', 'geolocation', 'ip', 'visitor analytics', 'location-fetch', 'tracking', 'maps', 'flask'],
    question: 'What is IPTrace?',
    answer:
      "IPTrace is a full-stack IP geolocation and visitor analytics platform built with Python and Flask. It generates unique tracking links, resolves visitor IP addresses across multiple geolocation providers in parallel, applies confidence scoring with automated centroid detection, and displays visitor analytics through interactive Leaflet maps and Chart.js dashboards. It includes 40 automated Pytest tests and rate-limited security.",
    suggestions: ['What technologies were used in IPTrace?', 'View the live demo for IPTrace', 'Tell me about Jobify'],
  },
  {
    keywords: ['education', 'degree', 'college', 'university', 'btech', 'cgpa', 'grades', 'institute'],
    question: 'What is his educational background?',
    answer:
      "Bhuvaneswaran holds a **B.Tech in Computer Science and Engineering** from **Dr. M.G.R. Educational and Research Institute** (June 2019 – February 2023) with a strong CGPA of **8.5 / 10.0**.",
    suggestions: ['What roles is he looking for?', 'What are his technical skills?', 'Download his resume'],
  },
  {
    keywords: ['roles', 'looking for', 'hire', 'opportunity', 'relocate', 'open to', 'positions', 'career interests'],
    question: 'What roles is he currently open to?',
    answer:
      "Bhuvaneswaran is actively available for opportunities as an:\n• **AI Engineer**\n• **Generative AI Engineer**\n• **Python Developer**\n• **Software Engineer**\n• **Full Stack Developer**\n\nHe is excited to join engineering teams building real-world AI applications and high-performance software systems.",
    suggestions: ['How can I contact him?', 'Download his resume', 'View his GitHub profile'],
  },
  {
    keywords: ['contact', 'email', 'reach', 'linkedin', 'phone', 'message', 'hire', 'talk'],
    question: 'How can I get in touch with Bhuvaneswaran?',
    answer:
      "You can connect directly with Bhuvaneswaran through:\n• **Email**: bhuvaneswarand15@gmail.com\n• **Phone**: +91 70923 39477\n• **LinkedIn**: [linkedin.com/in/bhuvaneswaran-s-69195b420/](https://www.linkedin.com/in/bhuvaneswaran-s-69195b420/)\n• **GitHub**: [github.com/Bhuvo](https://github.com/Bhuvo)\n• Or submit a message right here via the **Contact** section on this site!",
    suggestions: ['Download Resume', 'View his projects', 'What is his experience?'],
  },
  {
    keywords: ['resume', 'cv', 'pdf', 'download resume'],
    question: 'Can I download his resume?',
    answer:
      "Yes! You can download Bhuvaneswaran's verified resume directly by clicking the 'Download Resume' button in the navigation bar or Hero section, or by opening the link directly: [bhuvanesh_resume.pdf](/bhuvanesh_resume.pdf).",
    suggestions: ['What roles is he looking for?', 'What is his background?', 'Contact Bhuvaneswaran'],
  },
]

export const defaultAssistantGreeting =
  "Hello! I'm **Bhuvaney AI**, Bhuvaneswaran's interactive portfolio assistant. I can answer questions about his technical background, engineering experience at DataTerrain, AI & Flutter projects, skills, and current opportunities. What would you like to know?"

export const defaultSuggestions = [
  'What are your core technical skills?',
  'Tell me about your work experience',
  'What AI projects have you built?',
  'How did you optimize Superbill to 98ms?',
  'What opportunities are you open to?',
  'How can I contact you?',
]
