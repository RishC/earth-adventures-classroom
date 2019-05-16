import { Injectable } from '@angular/core';
import { USERS } from '../data/users';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  login(credentials) {
    let user = USERS.find(user => user.username === credentials.username);
    if (user) {
      if (user.password === credentials.password) {
        this.userService.setUser(user);
        return {
          success: true
        };
      } else {
        return {
          success: false,
          message: 'Password incorrect'
        };
      }

    }
    return {
      success: false,
      message: 'Username not found'
    };
  }
}
