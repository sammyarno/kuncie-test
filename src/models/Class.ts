export interface ClassItem {
  id: number;
  name: string;
  description: string;
}

export interface Mentor {
  id: number;
  name: string;
  description: string;
}

export interface Class {
  id: number;
  name: string;
  mentors: Mentor[];
  description: string;
}
