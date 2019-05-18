
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../course.service';
import { Course } from '../../core/data/course';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
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
