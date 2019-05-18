import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../../course.service';
import { Course } from 'src/app/core/data/course';
import { Router } from '@angular/router';

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
    let course = new Course();
    course.courseNumber = this.addCourseForm.value["courseNumber"];
    course.name = this.addCourseForm.value["courseName"];
    this.courseService.addCourse(course);
    this.router.navigate(['/dashboard/teacher']);
  }

}
