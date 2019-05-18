import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../core/data/course';
import { UserService } from '../core/services/user.service';


@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor(private userService: UserService) { }

  getCourses(): Observable<Course[]> {
    const courses = this.userService.currentUserSubject.getValue().courses;
    return of(courses);
  }

  getCourse(id: number | string) {
    return this.getCourses().pipe(

      map((courses: Course[]) => courses.find(course => course.id === +id))
    );
  }

  addCourse(course: Course){
   this.userService.currentUserSubject.getValue().courses.push(course);
  }
}
