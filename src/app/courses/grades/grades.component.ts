import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../core/services/local-storage.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  midTemrGrade$: number;
  finalGrade$: number;
  midPercent$: number;
  finalPercent$: number;
  totalPercent$: number;

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    var midResult= this.localStorageService.getMidterm();
    if(midResult){
      this.midTemrGrade$ =  parseInt(midResult);
      this.midPercent$ = parseInt(midResult)*100/5;
      this.totalPercent$ = this.midPercent$;
    }

    midResult= this.localStorageService.getFinal();
    if(midResult){
     this.finalGrade$ =  parseInt(midResult);
     this.finalPercent$ = parseInt(midResult)*100/5;
     this.totalPercent$ = (this.totalPercent$ + this.finalPercent$)/2
    }
  }

}
