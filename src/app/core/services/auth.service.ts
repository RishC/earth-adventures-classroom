import { Injectable } from '@angular/core';
import { USERS } from '../data/users';
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) { }

  login(credentials) {
    const user = USERS.find(user => user.username === credentials.username);
    if (user) {
      if (user.password === credentials.password) {
        this.userService.setUser(user);
        this.localStorageService.saveUserId(user.id);
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

  checkIfSessionExists() {
    if (this.localStorageService.getUserId()) {
      const user = USERS.find(user => user.id === +this.localStorageService.getUserId());
      if (user) {
        this.userService.setUser(user);
      } else {
        this.userService.deleteUser();
      }
    }
  }
   logout() {
        //this.userService.setUser(null);
		this.userService.deleteUser();
		this.localStorageService.destroyUserId();
    }
}
