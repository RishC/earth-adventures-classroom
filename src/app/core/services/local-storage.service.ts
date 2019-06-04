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

  saveMidterm(value: string){
    window.localStorage.setItem("midterm", value);
  }
   getMidterm(){
   return window.localStorage.getItem("midterm");
  }

  saveFinal(value: string){
    window.localStorage.setItem("final", value);
  }

   getFinal(){
   return window.localStorage.getItem("final");
  }


}
