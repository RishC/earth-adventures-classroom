import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../courses/courses.service';
import { Course } from '../../core/data/course';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>;
  selectedId: number;
  isTeacher;

  constructor(
    private service: CoursesService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.isTeacher = user.type === 'teacher');
    this.courses$ = this.route.paramMap.pipe(
      switchMap(params => {

        this.selectedId = +params.get('id');
        return this.service.getCourses();
      })
    );
  }
}
