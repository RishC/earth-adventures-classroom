import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';

const dashboardRoutes: Routes = [
  // { path: 'courses', redirectTo: '/dashboard' },
  // { path: 'course/:id', redirectTo: '/courses/:id', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent}

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
