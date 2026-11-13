import type { FocusTopic } from '../types'

export const currentFocusTopics: FocusTopic[] = [
  {
    title: 'Generative AI Engineering',
    category: 'Foundational Models',
    description:
      'Designing robust application pipelines leveraging state-of-the-art LLMs, multimodal models, structured JSON outputs, and programmatic function calling.',
    iconName: 'Sparkles',
    tags: ['Prompt Engineering', 'Structured Outputs', 'Function Calling', 'OpenAI'],
  },
  {
    title: 'Advanced RAG Architectures',
    category: 'Information Retrieval',
    description:
      'Implementing hybrid dense-sparse vector search, contextual chunking, re-ranking models, and query rewriting to eliminate hallucinations in domain-specific RAG.',
    iconName: 'Database',
    tags: ['Vector Databases', 'Hybrid Search', 'Contextual Re-ranking', 'Embeddings'],
  },
  {
    title: 'Agentic AI Systems',
    category: 'Autonomous Workflows',
    description:
      'Exploring multi-step reasoning loops, autonomous agent tool use, memory architectures, and LangGraph/LangChain stateful execution for complex multi-agent workflows.',
    iconName: 'Bot',
    tags: ['LangChain', 'AI Agents', 'Tool Calling', 'State Machines'],
  },
  {
    title: 'LLM Application Development',
    category: 'Applied AI Products',
    description:
      'Building production-grade AI wrappers and native intelligence into user-facing software, featuring streaming tokens, fallback strategies, and low-latency evaluation.',
    iconName: 'Cpu',
    tags: ['Streaming Responses', 'Evaluation', 'Guardrails', 'Latency Optimization'],
  },
  {
    title: 'Python Backend Engineering',
    category: 'Scalable Systems',
    description:
      'Architecting asynchronous microservices with FastAPI, Pydantic validation, Redis caching, and PostgreSQL connection pooling to serve demanding AI inference workloads.',
    iconName: 'Server',
    tags: ['FastAPI', 'AsyncIO', 'PostgreSQL', 'High Concurrency'],
  },
  {
    title: 'Intelligent Automation',
    category: 'Developer Productivity',
    description:
      'Developing automated workflows that eliminate cognitive overhead in developer tooling, continuous integration checks, and enterprise document processing pipelines.',
    iconName: 'Zap',
    tags: ['Workflow Orchestration', 'Automated Code Review', 'CI/CD Pipelines'],
  },
]
