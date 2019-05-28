import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CourseListComponent }    from './course-list/course-list.component';
import { CourseDetailsComponent }  from './course-details/course-details.component';
import { TeacherComponent }  from './teacher/teacher.component';
import { AddCourseComponent } from './teacher/addcourse/addcourse.component';
import { DashboardRoutingModule } from './dashboard-route.module';
import { CourseContentComponent } from './teacher/course-content/course-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CourseListComponent,
    CourseDetailsComponent,
    TeacherComponent,
    AddCourseComponent,
	CourseContentComponent
  ]
})
export class DashboardModule {}
