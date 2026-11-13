export interface LearningArea {
  id: string
  name: string
  category: string
  shortDescription: string
  details: string
  connections: string[]
  pulseDelay: number
}

export const learningUniverseData: LearningArea[] = [
  {
    id: 'agentic-ai',
    name: 'Agentic AI',
    category: 'Autonomous Systems',
    shortDescription: 'Multi-agent coordination, tool-use execution, and autonomous reasoning loops.',
    details: 'Exploring how autonomous AI agents can reason through complex objectives, invoke APIs, handle tool outputs, and iteratively correct actions.',
    connections: ['llm', 'adv-rag'],
    pulseDelay: 0,
  },
  {
    id: 'adv-genai',
    name: 'Advanced Generative AI',
    category: 'Deep Generative Architectures',
    shortDescription: 'Diffusion models, multimodal tokenization, and generative synthetic data generation.',
    details: 'Investigating generative architectures for synthesizing unstructured data, text-to-image paradigms, and multimodal foundation models.',
    connections: ['llm', 'cv'],
    pulseDelay: 0.4,
  },
  {
    id: 'llm',
    name: 'Large Language Models',
    category: 'Neural Reasoning',
    shortDescription: 'Transformer attention mechanics, context optimization, and fine-tuning strategies.',
    details: 'Studying modern decoder-only architectures, parameter-efficient fine-tuning (PEFT/LoRA), and structured JSON prompting.',
    connections: ['agentic-ai', 'adv-genai', 'adv-rag'],
    pulseDelay: 0.8,
  },
  {
    id: 'adv-rag',
    name: 'Advanced RAG Architectures',
    category: 'Context Grounding',
    shortDescription: 'Hybrid dense-sparse retrieval, multi-query routing, and reranking pipelines.',
    details: 'Implementing advanced retrieval-augmented generation designs with semantic chunking, reciprocal rank fusion (RRF), and cross-encoder rerankers.',
    connections: ['llm', 'vector-search'],
    pulseDelay: 1.2,
  },
  {
    id: 'vector-search',
    name: 'Vector Search & Indexing',
    category: 'Data Structures for AI',
    shortDescription: 'HNSW graphs, cosine similarity metrics, and high-dimensional vector spaces.',
    details: 'Deep diving into approximate nearest neighbor (ANN) search algorithms, quantization techniques, and sub-millisecond retrieval.',
    connections: ['adv-rag', 'python-backend'],
    pulseDelay: 1.6,
  },
  {
    id: 'ml',
    name: 'Advanced Machine Learning',
    category: 'Statistical AI',
    shortDescription: 'Ensemble methods, gradient boosting, and deep neural network regularization.',
    details: 'Pursuing M.Tech coursework on statistical learning theory, optimization techniques, loss landscape geometry, and bias-variance tradeoff.',
    connections: ['nlp', 'cv'],
    pulseDelay: 2.0,
  },
  {
    id: 'nlp',
    name: 'Natural Language Processing',
    category: 'Linguistic Intelligence',
    shortDescription: 'Subword tokenization, sequence-to-sequence models, and semantic intent mapping.',
    details: 'Exploring contextual embeddings, named entity recognition (NER), dependency parsing, and semantic similarity measurement.',
    connections: ['ml', 'llm'],
    pulseDelay: 2.4,
  },
  {
    id: 'cv',
    name: 'Computer Vision',
    category: 'Visual AI',
    shortDescription: 'Convolutional neural networks, object detection, and visual feature representations.',
    details: 'Deepening practical understanding of visual transformers (ViT), image segmentation, and edge-deployable vision architectures.',
    connections: ['ml', 'adv-genai'],
    pulseDelay: 2.8,
  },
  {
    id: 'python-backend',
    name: 'Python Backend Engineering',
    category: 'System Architecture',
    shortDescription: 'Asynchronous event loops, high-concurrency FastAPI microservices, and database pooling.',
    details: 'Scaling production-ready Python services with async/await, worker pools, Redis caching layers, and resilient schema contracts.',
    connections: ['vector-search', 'agentic-ai'],
    pulseDelay: 3.2,
  },
]

