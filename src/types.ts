export type TargetRegion = 'US' | 'UK' | 'EU';
export type AppLanguage = 'EN' | 'ES' | 'FR' | 'DE';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'web_apps' | 'seo_growth' | 'social_media' | 'automation_design' | string;
  deliverables: string[];
  roiImpact: string;
  keywords: string[];
  popular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  url: string;
  industry: string;
  servicesProvided: string[];
  techStack: string[];
  image: string;
  overview: string;
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  location: string;
}

export interface Statistic {
  id: string;
  numberValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  flag: string;
  avatar: string;
  rating: number;
  content: string;
  metric: string;
  metricLabel: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'website' | 'seo' | 'pricing' | 'timeline' | 'support' | 'app' | 'gbp' | 'maintenance';
  keywords: string[];
}

export interface ProblemSolution {
  id: string;
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  impactMetric: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  summary: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ChooseUsReason {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}
