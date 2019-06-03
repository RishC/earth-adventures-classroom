import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { AddCourseComponent } from './addcourse/addcourse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesNavbarComponent } from './courses-navbar/courses-navbar.component';
import { GradesComponent } from './grades/grades.component';
import { AddCourseContentComponent } from './course-content/addcoursecontent/addcoursecontent.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MidtermExamComponent } from './midterm-exam/midterm-exam.component';
import { FinalExamComponent } from './final-exam/final-exam.component';

@NgModule({
  declarations: [
    CourseDetailsComponent,
    CourseContentComponent,
    AddCourseComponent,
    CoursesNavbarComponent,
    GradesComponent,
	  AddCourseContentComponent,
    AssignmentsComponent,
    MidtermExamComponent,
    FinalExamComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
