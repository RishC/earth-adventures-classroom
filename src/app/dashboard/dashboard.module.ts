import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CourseListComponent }    from './course-list/course-list.component';
import { DashboardRoutingModule } from './dashboard-route.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CourseListComponent,
    DashboardComponent
  ]
})
export class DashboardModule {}
