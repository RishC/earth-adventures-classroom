import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddCourseComponent } from './addcourse/addcourse.component';
import { TeacherGuard } from '../core/guards/teacher.guard';
import { CourseContentComponent } from './course-content/course-content.component';
import { CoursesNavbarComponent } from './courses-navbar/courses-navbar.component';
import { GradesComponent } from './grades/grades.component';
import { AddCourseContentComponent } from './course-content/addcoursecontent/addcoursecontent.component';

const routes: Routes = [
  {
    path: 'courses', redirectTo: 'dashboard', pathMatch: 'full',
  },
  {
    path: 'courses/new', component: AddCourseComponent
  },
  {
    path: 'courses/:id', component: CoursesNavbarComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: CourseDetailsComponent },
      { path: 'content', component: CourseContentComponent },
      { path: 'grades', component: GradesComponent},
	  { path: 'addcoursecontent', component: AddCourseContentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
