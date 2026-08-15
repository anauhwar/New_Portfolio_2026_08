export interface Project {
  title: string;
  role: string;
  duration: string;
  description: string;
  impact: string;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface CareerData {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  projects: Project[];
  skills: SkillCategory[];
  certifications: string[];
}
