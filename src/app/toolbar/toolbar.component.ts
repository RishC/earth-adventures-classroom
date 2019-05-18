import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/services/user.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isTeacher = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.isTeacher.subscribe(isTeacher => this.isTeacher = isTeacher);
  }

}
