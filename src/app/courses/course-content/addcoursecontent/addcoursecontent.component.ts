import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

import { CoursesService } from '../../courses.service';
import { Course } from 'src/app/core/data/course';
import { Content } from 'src/app/core/data/content';
import { UserService } from 'src/app/core/services/user.service';

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
    classContent: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private courseService: CoursesService,
    private router: Router,
	private route: ActivatedRoute,
	private userService: UserService
  ) {}

  ngOnInit() {
	this.course$ = this.route.parent.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.courseService.getCourse(params.get('id')))
    );
  }

  onSubmit(id: number) {
	  
	var course = this.userService.currentUserSubject.getValue().courses[id-1];
 	let con = new Content();
	con.clas = "Class"+(course.content.length+1)+": "+this.addCourseContentForm.value["classContent"];
	course.content.push(con);
	this.router.navigate(['/courses', id, 'content']);
  }
}
