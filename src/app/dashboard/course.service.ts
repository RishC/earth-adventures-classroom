import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from './course';
import { COURSES } from './courses';


@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  getCourse(id: number | string) {
    return this.getCourses().pipe(
    
      map((courses: Course[]) => courses.find(course => course.id === +id))
    );
  }
}
