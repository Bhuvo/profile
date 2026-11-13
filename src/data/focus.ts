export interface FocusArea {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  tags: string[];
  gradient: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: "genai-eng",
    title: "Generative AI Engineering",
    category: "Foundation Models",
    description:
      "Deep dive into multi-modal models, structured token generation, function calling paradigms, and production-grade LLM inference architectures.",
    icon: "Brain",
    tags: ["LLMs", "OpenAI", "Prompt Design", "Latency Optimization"],
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: "advanced-rag",
    title: "Advanced RAG Architectures",
    category: "Information Retrieval",
    description:
      "Designing multi-stage retrieval pipelines with semantic re-ranking, hybrid sparse/dense vector search, contextual chunking, and metadata filtering.",
    icon: "Database",
    tags: ["Vector Search", "Embeddings", "Ollama", "Re-ranking"],
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Systems",
    category: "Autonomous Systems",
    description:
      "Building multi-agent task orchestrators, self-correcting reflection loops, dynamic tool calling, and full-duplex conversational voice agents.",
    icon: "Bot",
    tags: ["Multi-Agent", "Tool Calling", "Voice AI", "State Machines"],
    gradient: "from-violet-500/20 to-cyan-500/20"
  },
  {
    id: "llm-app-dev",
    title: "LLM Application Development",
    category: "Product Engineering",
    description:
      "Integrating intelligence into real-world business workflows, automated resume and ATS scoring engines, and intelligent code review pipelines.",
    icon: "Cpu",
    tags: ["Product AI", "LangChain", "Evaluation", "Reliability"],
    gradient: "from-indigo-500/20 to-pink-500/20"
  },
  {
    id: "python-backend",
    title: "Python Backend Engineering",
    category: "High-Throughput Services",
    description:
      "Constructing resilient asynchronous microservices using FastAPI, WebSockets streaming, and PostgreSQL with strict pydantic schemas.",
    icon: "Server",
    tags: ["FastAPI", "AsyncIO", "WebSockets", "PostgreSQL"],
    gradient: "from-blue-500/20 to-violet-500/20"
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Automation",
    category: "Workflow Automation",
    description:
      "Streamlining repetitive business operations through AI-powered IVR, autonomous accounts receivable follow-up, and intelligent web scrapers.",
    icon: "Workflow",
    tags: ["IVR", "Web Scraping", "Process Automation", "MCP"],
    gradient: "from-teal-500/20 to-cyan-500/20"
  }
];

