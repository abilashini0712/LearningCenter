export interface Course {
  id: number;
  title: string;
  duration: string;
  fee: string;
  description: string;

  modules: {
    semester1: string[];
    semester2: string[];
  };

  learn: string[];

  includes: {
    skillLevel: string;
    certificate: string;
    projects: string;
    access: string;
  };
}