import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { take, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StudentGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private userService: UserService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const user = this.userService.currentUserSubject.getValue();
        if (user.type === 'student') {
            return true;
        } else {
            return this.router.parseUrl('/dashboard/teacher');
        }
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(next, state);
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}
