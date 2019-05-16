import { Course } from './course';


export class User {
    id: number;
    username: string;
    password: string;
    courses: Course[];
}
