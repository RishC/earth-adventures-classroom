import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/data/course';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CoursesService } from '../courses.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-courses-navbar',
  templateUrl: './courses-navbar.component.html',
  styleUrls: ['./courses-navbar.component.css']
})
export class CoursesNavbarComponent implements OnInit {
  course$: Observable<Course>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CoursesService,
  ) { }

  ngOnInit() {
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCourse(params.get('id')))
    );
  }

}
