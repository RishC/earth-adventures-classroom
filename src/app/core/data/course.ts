import { Content } from './content';
import { Assignment } from './assignment';

export class Course {
  id: number;
  courseNumber: string;
  name: string;
  description: string;
  content: Content[];
  assignments: Assignment[];
}
