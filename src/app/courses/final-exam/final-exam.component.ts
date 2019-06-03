import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CoursesService } from '../courses.service';
import { Course } from '../../core/data/course';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-final-exam',
  templateUrl: './final-exam.component.html',
  styleUrls: ['./final-exam.component.css']
})
export class FinalExamComponent implements OnInit {
  course$: Observable<Course>;

  isSM = false;
  courseid : number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CoursesService,
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
    if(this.courseid == 1) {
      this.isSM = true;
    }
  }

  onSubmit() {
    if (confirm("Are you sure you want to submit this exam, answers cannot be changed later?")){
      this.router.navigate(['/courses/'+this.courseid+'/assignments']);
    }
  }
}
