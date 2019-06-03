import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { CoursesService } from '../courses.service';
import { Course } from '../../core/data/course';
import { User } from '../../core/data/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent implements OnInit {
  course$: Observable<Course>;
  courseid: number;

  constructor( 
    private router: Router,
    private service: CoursesService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.course$ = this.route.parent.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCourse(params.get('id')))
    );
    this.course$.pipe()
      .subscribe( course => {
        this.courseid = course.id;
      }
    );
  }

  goToMidtermExam() {
    this.router.navigate(['/courses/'+this.courseid+'/midterm-exam']);
  }

  goToFinalExam() {
    this.router.navigate(['/courses/'+this.courseid+'/final-exam']);
  }

}
