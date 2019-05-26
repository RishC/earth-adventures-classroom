import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CourseService } from '../dashboard/course.service';
import { Course } from '../core/data/course';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  courses$: Observable<Course[]>;
  selectedId: number;
  isTeacher = false;

  constructor(private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private courseService : CourseService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.isTeacher = user.type === 'teacher');
    this.courses$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.courseService.getCourses();
      })
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
