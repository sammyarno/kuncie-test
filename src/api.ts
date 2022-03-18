import axios from './plugins/axios';
import { Class, ClassItem } from './models/Class';

const apiUrl = process.env.REACT_APP_API_URL || '';

export const getAllClasses = async () => {
  const result = await axios.get<{ items: ClassItem[] }>(`${apiUrl}/available-classes`);
  return result;
};

export const getClassDetail = async (id: number) => {
  const result = await axios.get<Class>(`${apiUrl}/learning-class?id=${id}`);
  return result;
};
