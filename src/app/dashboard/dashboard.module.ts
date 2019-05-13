import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CourseListComponent }    from './course-list/course-list.component';
import { CourseDetailsComponent }  from './course-details/course-details.component';

import { DashboardRoutingModule } from './dashboard-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
  ],
  declarations: [
    CourseListComponent,
    CourseDetailsComponent
  ]
})
export class DashboardModule {}
