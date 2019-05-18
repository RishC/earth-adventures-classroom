import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  public isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  public isTeacherSubject = new ReplaySubject<boolean>(1);
  public isTeacher =  this.isTeacherSubject.asObservable();

  constructor() { }

  setUser(user) {
    if (user) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);

      if(user.username==='teacher'){
        this.isTeacherSubject.next(true);
      }
    }
  }
  getUser(){
   return this.currentUserSubject.value;
  }
}
