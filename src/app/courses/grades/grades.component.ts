import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../core/services/local-storage.service';
import { UserService } from 'src/app/core/services/user.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Course } from 'src/app/core/data/course';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  course$: Observable<Course>;
  midTemrGrade$: number;
  finalGrade$: number;
  midPercent$: number;
  finalPercent$: number;
  totalPercent$: number;
  courseID: number;

  constructor(
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private courseService: CoursesService,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    var midResult= this.localStorageService.getMidterm();
    if(midResult){
      this.midTemrGrade$ =  parseInt(midResult);
      this.midPercent$ = parseInt(midResult)*100/5;
      this.totalPercent$ = this.midPercent$;
    }

    midResult= this.localStorageService.getFinal();
    if(midResult){
     this.finalGrade$ =  parseInt(midResult);
     this.finalPercent$ = parseInt(midResult)*100/5;
     this.totalPercent$ = (this.totalPercent$ + this.finalPercent$)/2
    }
    // update the overall grade in users.ts
    this.course$ = this.route.parent.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.courseService.getCourse(params.get('id')))
    );
    this.course$.pipe()
      .subscribe( course => {
        this.courseID = course.id;
      }
    );
    var course = this.userService.currentUserSubject.getValue().courses[this.courseID-1];
    course.overallGrade = this.totalPercent$;
  }

}
