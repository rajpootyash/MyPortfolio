export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const SUGGESTED_QUESTIONS = [
  "Tell me about your education",
  "What projects have you built?",
  "Explain your architecture approach",
  "What technologies do you use?",
  "Are you available for hire?",
];

export async function generateBotResponse(query: string): Promise<string> {
  // Simulate network/thinking delay (1-1.5s)
  const delay = Math.floor(Math.random() * 500) + 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  const lowerQuery = query.toLowerCase();

  // Intent: Greeting
  if (lowerQuery.match(/^(hi|hello|hey|greetings|sup|morning|evening)/)) {
    return "Hello! I'm Akash's AI assistant. I can tell you about his experience, projects, architecture skills, or availability. How can I help you today?";
  }

  // Intent: About
  if (lowerQuery.match(/(about yourself|who are you|tell me about you)/)) {
    return "I'm Akash Deep Verma, a Full Stack Engineer with 3.5+ years of experience based in Lucknow, India. I specialize in building scalable distributed systems, real-time architectures, and AI SaaS platforms. My core focus is on bridging the gap between robust backends (.NET/PostgreSQL) and cutting-edge AI features.";
  }

  // Intent: Education
  if (lowerQuery.match(/(education|study|studied|degree|college|university|background)/)) {
    return "Akash holds a B.Tech in Information Technology from the Bansal Institute of Engineering & Technology (2018–2022). So yes, he comes from a strong formal Computer Science background.";
  }

  // Intent: Experience
  if (lowerQuery.match(/(experience|work|worked|job|company|role)/)) {
    return "Akash has been working as a Full Stack Engineer at Technosys Services Pvt. Ltd. since August 2022. During this time, he has built scalable REST APIs using ASP.NET Core, implemented event-driven architectures with RabbitMQ, and driven massive performance gains (up to 40% DB optimization).";
  }

  // Intent: Projects
  if (lowerQuery.match(/(project|built|portfolio|work on)/)) {
    return "Akash has architected several massive systems. Key highlights include:\n• **KnowledgeMesh AI**: An AI SaaS platform using RAG and Vector DBs.\n• **Distributed Email Platform**: A Gmail-like system handling async processing via RabbitMQ.\n• **Workforce System**: A government-scale tracking system for the Kumbh Authority handling thousands of concurrent users.\nWant to hear more about a specific one?";
  }

  // Intent: Architecture
  if (lowerQuery.match(/(architecture|design|scalable|scale|system|pattern)/)) {
    return "Akash focuses heavily on Clean Architecture (Controller → Service → Repository). He builds systems that don't fail under scale, utilizing event-driven messaging (RabbitMQ), background processing (Hangfire), and real-time sockets (SignalR). He also integrates modern AI RAG pipelines smoothly into enterprise systems.";
  }

  // Intent: Skills
  if (lowerQuery.match(/(skill|technology|tech|stack|use|know|language)/)) {
    return "His core stack includes:\n• **Frontend**: React, TypeScript\n• **Backend**: ASP.NET Core, FastAPI\n• **Databases**: SQL Server, PostgreSQL\n• **Systems**: RabbitMQ, Hangfire, SignalR\n• **AI**: RAG, LangChain, ChromaDB, Knowledge Graphs.";
  }

  // Intent: Performance
  if (lowerQuery.match(/(performance|optimize|fast|latency|speed)/)) {
    return "Performance optimization is one of Akash's strongest areas. He recently improved API response times by 35% and optimized complex database queries resulting in a 40% performance gain for enterprise applications.";
  }

  // Intent: Hiring / Availability
  if (lowerQuery.match(/(hire|hiring|available|freelance|full-time|contact|reach|email|phone)/)) {
    return "Yes, Akash is currently open for new opportunities! You can reach him directly at:\n• **Email**: contact@akashdeep.com\n• **Phone**: +91 (123) 456-7890\n• **LinkedIn**: linkedin.com/in/akashdeep\n\nLet's build something powerful together.";
  }

  // Intent: Journey
  if (lowerQuery.match(/(journey|start|begin)/)) {
    return "His journey started with a B.Tech in IT (2018-2022). From there, he joined Technosys Services as a Full Stack Engineer, diving deep into ASP.NET Core and scalable databases. Over the last 3.5 years, he evolved from building standard web apps to architecting distributed event-driven systems and modern AI SaaS platforms.";
  }

  // Default Fallback
  return "That's an interesting question! I'm best equipped to answer queries about Akash's engineering experience, tech stack, scalable architecture patterns, or his availability for hire. What would you like to know?";
}
