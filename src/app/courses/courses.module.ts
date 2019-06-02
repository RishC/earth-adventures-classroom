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

@NgModule({
  declarations: [
    CourseDetailsComponent,
    CourseContentComponent,
    AddCourseComponent,
    CoursesNavbarComponent,
    GradesComponent,
	AddCourseContentComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
