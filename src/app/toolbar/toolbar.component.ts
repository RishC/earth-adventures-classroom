import { Observable } from 'rxjs';
import { Router, } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoursesService } from '../courses/courses.service';
import { Course } from '../core/data/course';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private courseService : CoursesService) { }

  ngOnInit() {
    this.courses$ = this.courseService.getCourses();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
