import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtermExamComponent } from './midterm-exam.component';

describe('MidtermExamComponent', () => {
  let component: MidtermExamComponent;
  let fixture: ComponentFixture<MidtermExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidtermExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidtermExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
