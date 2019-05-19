import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'earth-adventures-classroom';
  isAuthenticated = false;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkIfSessionExists();
    this.userService.isAuthenticated.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }
}
