import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CoursesService } from '../courses.service';
import { Course } from '../../core/data/course';
import { User } from '../../core/data/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<Course>;

  isTeacher = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CoursesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isTeacher = this.userService.currentUserSubject.getValue().type === 'teacher';
    this.course$ = this.route.parent.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCourse(params.get('id')))
    );
  }

  deleteCourse(id: number){
   if (confirm("Are you sure you want to delete this course, all of its associated data will be lost?")){
     var index = this.userService.currentUserSubject.getValue().courses.findIndex(item => item.id === id);
     this.userService.currentUserSubject.getValue().courses.splice(index, 1);
     this.router.navigate(['/dashboard']);
   }
  }

}
