import React from 'react';
import { 
  ClipboardCheck, 
  ServerCog, 
  Bot, 
  ShieldCheck, 
  Scale, 
  BrainCircuit, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { ProcessPoint } from './types';

export const PROCESS_POINTS: ProcessPoint[] = [
  {
    id: 1,
    title: "Process Assessment",
    description: "Review current workflows and evaluate process maturity.",
    details: [
      "Review current workflows to map existing state.",
      "Identify improvement and standardization opportunities.",
      "Evaluate process maturity levels across departments."
    ],
    icon: <ClipboardCheck size={28} />,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Applications & Systems",
    description: "Analyze technical readiness and integration roadmaps.",
    details: [
      "Analyze automation readiness of ERP and finance platforms.",
      "Assess integration possibilities (APIs, middleware).",
      "Develop roadmap for necessary system upgrades."
    ],
    icon: <ServerCog size={28} />,
    color: "bg-indigo-500"
  },
  {
    id: 3,
    title: "Automation Feasibility",
    description: "Select best-fit tools (RPA, AI) for each process.",
    details: [
      "Assess suitability for RPA, AI, or agentic tools.",
      "Select best-fit automation solution by process complexity.",
      "Conduct proof-of-concept (POC) for critical paths."
    ],
    icon: <Bot size={28} />,
    color: "bg-cyan-500"
  },
  {
    id: 4,
    title: "Privacy & Compliance",
    description: "Vet automations for data protection and regulatory risks.",
    details: [
      "Vet candidate automations for data protection risks (GDPR, CCPA).",
      "Evaluate regulatory risks in automated decision making.",
      "Embed compliance checkpoints directly in the automation cycle."
    ],
    icon: <ShieldCheck size={28} />,
    color: "bg-emerald-500"
  },
  {
    id: 5,
    title: "SOX & SOD Controls",
    description: "Validate internal controls and prevent conflicts.",
    details: [
      "Validate internal controls remain effective post-automation.",
      "Prevent conflicts of interest via Segregation of Duties (SOD) reviews.",
      "Automate audit trail generation for control verification."
    ],
    icon: <Scale size={28} />,
    color: "bg-rose-500"
  },
  {
    id: 6,
    title: "AI & Agentic Automation",
    description: "Strategically introduce AI agents and address traceability.",
    details: [
      "Strategically introduce AI agents and Gen AI workflows.",
      "Address explainability and hallucination risks.",
      "Ensure full traceability of agentic actions."
    ],
    icon: <BrainCircuit size={28} />,
    color: "bg-violet-500"
  },
  {
    id: 7,
    title: "ROI & Scalability",
    description: "Model costs, savings, and plan for phased scaling.",
    details: [
      "Model automation costs vs. expected savings (FTE, accuracy).",
      "Define KPIs for success measurement.",
      "Plan for phased scaling across business domains."
    ],
    icon: <TrendingUp size={28} />,
    color: "bg-amber-500"
  },
  {
    id: 8,
    title: "User & Stakeholder Experience",
    description: "Prioritize productivity and support change management.",
    details: [
      "Prioritize solutions that enhance productivity and user satisfaction.",
      "Support change management initiatives.",
      "Invest in upskilling programs for displaced tasks."
    ],
    icon: <Users size={28} />,
    color: "bg-pink-500"
  }
];