import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent }    from './course-list/course-list.component';
import { CourseDetailsComponent }  from './course-details/course-details.component';
import {TeacherComponent }  from './teacher/teacher.component';
import { AddCourseComponent } from './teacher/addcourse/addcourse.component';

const dashboardRoutes: Routes = [
  { path: 'courses', redirectTo: '/dashboard' },
  { path: 'course/:id', redirectTo: '/courses/:id' },
  { path: 'dashboard',  component: CourseListComponent, data: { animation: 'courses' } },
  { path: 'courses/:id', component: CourseDetailsComponent, data: { animation: 'course' } },
  { path: 'dashboard/teacher',  component: TeacherComponent, data: { animation: 'courses' } },
  { path: 'dashboard/teacher/addcourse',  component: AddCourseComponent, data: { animation: 'courses' } }

];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }

