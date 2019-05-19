
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../course.service';
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

  constructor(
    private service: CourseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {   
    this.courses$ = this.route.paramMap.pipe(
      switchMap(params => {

        this.selectedId = +params.get('id');
        return this.service.getCourses();
      })
    );
  }
}
