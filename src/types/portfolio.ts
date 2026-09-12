export interface CaseStudy {
  idea: string;
  why: string;
  prototype: string;
  challenge: string;
  iteration: string;
  result: string;
  whatLearned: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'software' | 'hardware' | 'experimental';
  tagline: string;
  description: string;
  techStack: string[];
  status: 'Published' | 'Active' | 'Prototype' | 'Exploratory' | 'Complete';
  downloads?: string;
  metrics?: string;
  caseStudy?: CaseStudy;
  featured?: boolean;
}

export interface RoboticsSeason {
  year: string;
  academicYear: string;
  grade: string;
  teamName: string;
  teamNumber: string;
  affiliation: string;
  role: string;
  theme: string;
  summary: string;
  norCalResults?: {
    teamwork?: string;
    skills?: string;
  };
  worldsResults?: {
    divisionTeamwork?: string;
  };
  awards: string[];
  robotHighlights: string[];
  takeaway: string;
}

export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  platform: string;
  downloads?: string;
  downloadsNum?: number;
  status: 'Published' | 'In Development' | 'Prototype';
  problemSolved: string;
  howBuilt: string;
  techStack: string[];
  keyFeatures: string[];
  whatLearned: string;
  releaseYear: string;
  appStoreUrl?: string;
}

export interface MusicProfile {
  clarinet: {
    instrument: string;
    ensemble: string;
    school: string;
    gradeYears: string;
    teacher: string;
    achievement: string;
    description: string;
    repertoire: string[];
  };
  piano: {
    instrument: string;
    abrsm: {
      grade6: { year: string; syllabus: string; result: string };
      grade7: { year: string; syllabus: string; result: string };
      status: string;
    };
    description: string;
    favoritePieces: string[];
  };
  quote: string;
}

export interface SwimStats {
  club: string;
  experience: string;
  practiceHours: string;
  qualifyingTimes14yo: { event: string; time: string }[];
  farWesterns2025: {
    meet: string;
    age: number;
    achievements: string[];
  };
  topEvents: { event: string; time: string }[];
  reflection: string;
}

export interface ServiceItem {
  organization: string;
  timeframe: string;
  bullets: string[];
}

export interface MathItem {
  competition: string;
  gradeYear: string;
  honors: string[];
}

export interface HowIBuildStep {
  stepNumber: number;
  title: string;
  prompt: string;
  description: string;
  exampleFromWork: string;
}
