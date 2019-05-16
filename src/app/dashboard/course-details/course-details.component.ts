import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CourseService } from '../course.service';
import { Course } from '../../core/data/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<Course>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseService
  ) { }

  ngOnInit() {
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCourse(params.get('id')))
    );
  }

  gotoCourses(course: Course) {
    let courseId = course ? course.id : null;

    this.router.navigate(['/dashboard']);
  }
}
