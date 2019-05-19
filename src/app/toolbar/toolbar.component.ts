import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isTeacher = false;
  constructor(private userService: UserService,
              private authService: AuthService,
			  private router: Router) { }

  ngOnInit() {
    this.userService.isTeacher.subscribe(isTeacher => this.isTeacher = isTeacher);
  }
  
   logout() {
        this.authService.logout();
		this.router.navigate(['/loginPage']);
}
}
