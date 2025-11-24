

export interface Project {
  id: string;
  title: string;
  description?: string;
  technologies?: string[];
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

// Fix: Add ChatMessage interface to be used by the ChatAssistant component.
export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    threads: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
}
