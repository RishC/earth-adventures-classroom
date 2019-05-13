import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent }    from './course-list/course-list.component';
import { CourseDetailsComponent }  from './course-details/course-details.component';

const dashboardRoutes: Routes = [
  { path: 'courses', redirectTo: '/dashboard' },
  { path: 'course/:id', redirectTo: '/courses/:id' },
  { path: 'dashboard',  component: CourseListComponent, data: { animation: 'courses' } },
  { path: 'courses/:id', component: CourseDetailsComponent, data: { animation: 'course' } }
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


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
