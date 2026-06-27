export const profile = {
  name: 'Mason Choey',
  title: 'Software Engineer',
  tagline:
    'I build production ML systems — RAG pipelines, multi-agent LLM applications, and the full-stack infrastructure that ships them.',
  location: 'Los Angeles, CA',
  email: 'mason@choey.com',
  links: {
    github: 'https://github.com/masonchoey',
    linkedin: 'https://linkedin.com/in/masonchoey',
    email: 'mailto:mason@choey.com',
  },
}

export const highlights = [
  { value: '2.24×', label: 'query success boost on autonomous LLM web agent (CMU)' },
  { value: '95%', label: 'faster compliance report generation (weeks → minutes)' },
  { value: '<2s', label: 'latency serving 100+ employees on serverless RAG' },
  { value: '500+', label: 'policy pages processed via event-driven ingestion' },
]

export const about = [
  "I'm a Computer Science student at UCLA (B.S., expected 2028) focused on building ML systems that hold up in production — not just notebooks.",
  'Across four engineering internships and an open-source research role at Carnegie Mellon, I’ve shipped serverless RAG chatbots on AWS, multi-agent LLM pipelines for security compliance, and autonomous web agents — owning architecture from ingestion and embeddings through deployment, monitoring, and cost control.',
  'I care about the unglamorous parts that make systems real: latency budgets, zero-downtime ingestion, IAM, observability, and keeping cloud bills sane.',
]

export const experience = [
  {
    company: 'Alphacore Wealth Advisory',
    role: 'ML Engineer Intern',
    location: 'Remote',
    period: 'Sep – Dec 2025',
    points: [
      'Deployed a serverless RAG chatbot on AWS (Lambda + Bedrock + S3) processing 500+ pages of policy documents, serving 100+ employees company-wide at under 2s latency on a containerized Python/FastAPI backend.',
      'Architected a production MLOps stack with ECR deployment, CloudWatch monitoring, and IAM controls, with environment-based model switching across open-source Bedrock models (Llama 4 Maverick 17B) — keeping costs under $30/month.',
      'Built an event-driven ingestion pipeline with S3 triggers and Lambda that auto-rebuilds the FAISS index on upload, enabling zero-downtime updates without manual reindexing.',
    ],
    stack: ['AWS Lambda', 'Bedrock', 'S3', 'FAISS', 'FastAPI', 'Docker', 'ECR'],
  },
  {
    company: 'Highnote',
    role: 'Software Engineer Intern',
    location: 'San Mateo, CA',
    period: 'Jun – Sep 2025',
    points: [
      'Refactored a production codebase onto OpenRouter for improved latency, model flexibility, and cost efficiency.',
      'Built an automatic LLM-based categorizer to sort and tag presentations at scale, eliminating manual processing and reducing hand-categorization time by 90%.',
    ],
    stack: ['OpenRouter', 'LLMs', 'Python'],
  },
  {
    company: 'Cymetrx',
    role: 'ML Systems Engineer Intern',
    location: 'Los Angeles, CA',
    period: 'Jan – Sep 2025',
    points: [
      'Built a production RAG validator for OSINT reports using ChromaDB and semantic similarity search with a web-scraping pipeline (SQLite caching + rate limiting), cutting manual fact-checking time by 80% across 50+ sources/report.',
      'Architected a multi-agent LLM system (LangChain) with specialized compliance, governance, and remediation agents to auto-generate NIST 800-53 CISO reports from CVE data, processing 400+ vulnerabilities in parallel and reducing report time by 95%.',
    ],
    stack: ['LangChain', 'ChromaDB', 'RAG', 'Multi-agent', 'Python'],
  },
  {
    company: 'Carnegie Mellon University',
    role: 'ML Researcher',
    location: 'Remote',
    period: 'Jun 2023 – May 2025',
    points: [
      'Engineered ReasonerAgent, an autonomous LLM web agent with world-model planning for multi-step workflows — boosting user query success in shopping, booking, and info retrieval by 2.24×.',
      'Fine-tuned long-context LLMs to enhance reasoning and deployed a full Gradio frontend.',
      'Published research through Maitrix.org as a primary contributor in open-source research.',
    ],
    stack: ['LLM Agents', 'Fine-tuning', 'PyTorch', 'Gradio'],
  },
]

export const projects = [
  {
    name: 'ReflectAI — AI Journaling Platform',
    period: 'Jan 2026 – Present',
    blurb:
      'A LangChain-powered journaling app with agents for contextual Q&A over past entries, pgvector semantic search, and a Redis caching layer. Async ingestion (FastAPI + Celery + Redis) handles automated embedding generation, sentiment analysis, and topic clustering, with LangSmith monitoring for prompt optimization.',
    stack: ['LangChain', 'PostgreSQL/pgvector', 'FastAPI', 'Celery', 'Redis', 'LangSmith'],
    live: 'https://reflect-ai-nine.vercel.app',
    github: 'https://github.com/masonchoey/ReflectAI',
    featured: true,
  },
  {
    name: 'OpenSpiel Hearts RL Model',
    period: 'Jul 2025 – Present',
    blurb:
      'An RL training pipeline with an attention-based architecture using PPO self-play agents, achieving a 35% win rate against diverse AI opponents. Paired with a full-stack Hearts card game — Python/FastAPI backend, React frontend, real-time AI gameplay — containerized with Docker Compose.',
    stack: ['PPO / RL', 'OpenSpiel', 'PyTorch', 'FastAPI', 'React', 'Docker'],
    live: 'https://hearts-wheat-gamma.vercel.app',
    github: 'https://github.com/masonchoey/Hearts',
    featured: true,
  },
  {
    name: 'From Stigma to Support (RANLP 2023)',
    period: '2023',
    blurb:
      'Sole-authored, peer-reviewed NLP research presented at RANLP 2023 (500+ attendees). Built a 5,500+ sentence parallel monolingual corpus and fine-tuned a BERT-based model achieving 98% accuracy detecting and neutralizing mental-illness bias in text.',
    stack: ['NLP', 'BERT', 'PyTorch', 'Research'],
    live: 'https://aclanthology.org/2023.ranlp-1.28/',
    liveLabel: 'Read paper',
    github: 'https://github.com/masonchoey/from-stigma-to-support',
    featured: false,
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'] },
  {
    group: 'ML / AI',
    items: ['LangChain', 'LangSmith', 'PyTorch', 'RAG', 'Transformers', 'Ray', 'ChromaDB', 'FAISS', 'pgvector', 'W&B'],
  },
  {
    group: 'Backend',
    items: ['FastAPI', 'Django', 'Celery', 'Redis', 'PostgreSQL', 'MongoDB', 'Node.js'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS (Lambda, Bedrock, S3, ECR)', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Nginx', 'CloudWatch', 'IAM'],
  },
]

export const education = {
  school: 'University of California, Los Angeles (UCLA)',
  degree: 'B.S. in Computer Science',
  detail: 'GPA 3.61 · Expected June 2028',
}
