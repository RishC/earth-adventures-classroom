import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getUserId(): number {
    return window.localStorage.userId;
  }

  saveUserId(token: number) {
    window.localStorage.userId = token;
  }

  destroyUserId() {
    window.localStorage.removeItem('userId');
  }
}
