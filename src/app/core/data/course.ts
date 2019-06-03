import { Content } from './content';

export class Course {
  id: number;
  courseNumber: string;
  name: string;
  description: string;
  content: Content[];
}
