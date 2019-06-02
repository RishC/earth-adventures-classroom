import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

import { CoursesService } from '../../courses.service';
import { Course } from 'src/app/core/data/course';

@Component({
  selector: 'app-addcoursecontent',
  templateUrl: './addcoursecontent.component.html',
  styleUrls: ['./addcoursecontent.component.css'],
})
export class AddCourseContentComponent implements OnInit{
	course$: Observable<Course>;
	courses$: Observable<Course[]>;
	selectedId: number;

  addCourseContentForm = this.fb.group({
    classNumber: ['', Validators.required],
    classContent: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private courseService: CoursesService,
    private router: Router,
	private route: ActivatedRoute
  ) {}

  ngOnInit() {
	this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.courseService.getCourse(params.get('id')))
    );
	this.courses$ = this.route.paramMap.pipe(
      switchMap(params => {

    this.selectedId = +params.get('id');
        return this.courseService.getCourses();
      })
    )
  }

  onSubmit() {
  }
}
