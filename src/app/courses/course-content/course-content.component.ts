import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CoursesService } from '../courses.service';
import { Course } from '../../core/data/course';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})
export class CourseContentComponent implements OnInit {
	course$: Observable<Course>;
	
	isTeacher = false;
  constructor(
    private route: ActivatedRoute,
    private service: CoursesService,
	private userService: UserService
  ) {}

  ngOnInit() {
	  this.isTeacher = this.userService.currentUserSubject.getValue().type === 'teacher';
	  this.course$ = this.route.parent.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCourse(params.get('id')))
    );
  }

}
