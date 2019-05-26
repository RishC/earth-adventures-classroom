import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../../course.service';
import { Course } from 'src/app/core/data/course';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
})
export class AddCourseComponent implements OnInit{

  addCourseForm = this.fb.group({
    courseNumber: ['', Validators.required],
    courseName: ['', Validators.required],
    courseDescription: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    const courses = this.courseService.getCourses();
    var count = 0;

    courses.subscribe(val => count = val.length);
    
    let course = new Course();
    course.id = count + 1;
    course.courseNumber = this.addCourseForm.value["courseNumber"];
    course.name = this.addCourseForm.value["courseName"];
    course.description = this.addCourseForm.value["courseDescription"];
    this.courseService.addCourse(course);
    this.router.navigate(['/dashboard/teacher']);
  }

}
