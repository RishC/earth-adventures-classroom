import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CourseService } from '../../course.service';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/data/user';
import { Course } from '../../../core/data/course';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})
export class CourseContentComponent implements OnInit {
	course$: Observable<Course>;
	
  constructor(
    private route: ActivatedRoute,
	private router: Router,
    private service: CourseService,
    private userService: UserService
  ) {}

  ngOnInit() {
	  this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCourse(params.get('id')))
    );
  }

}
