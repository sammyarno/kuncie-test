import { Class, ClassItem } from './Class';

interface CommonResponse {
  loading: boolean;
  error: Error | null;
}

export interface Error {
  code: number;
  message: string;
}

export interface ClassListResponse extends CommonResponse {
  data: ClassItem[];
}

export interface ClassDetailResponse extends CommonResponse {
  data: Class;
}
