export interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  nftImage: string;
  sections: Section[];
}

export interface Section {
  name: string;
  units: Unit[];
}

export interface Unit {
  name: string;
  description?: string;
  steps: Step[];
}

export interface Step {
  name: string;
  questions: Question[];
}

export interface Question {
  type: string;
  question: string;
  answers?: string[];
  correctAnswer: string | boolean | number;
}
