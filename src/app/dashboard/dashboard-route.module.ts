import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddCourseComponent } from './teacher/addcourse/addcourse.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { StudentGuard } from '../core/guards/student.guard';
import { TeacherGuard } from '../core/guards/teacher.guard';

const dashboardRoutes: Routes = [
  { path: 'courses', redirectTo: '/dashboard' },
  { path: 'course/:id', redirectTo: '/courses/:id', canActivate: [AuthGuard] },
  { path: 'dashboard', component: CourseListComponent, canActivate: [AuthGuard, StudentGuard] },
  { path: 'courses/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/teacher', component: TeacherComponent, canActivate: [AuthGuard, TeacherGuard] },
  { path: 'dashboard/teacher/addcourse', component: AddCourseComponent, canActivate: [AuthGuard, TeacherGuard] }

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

