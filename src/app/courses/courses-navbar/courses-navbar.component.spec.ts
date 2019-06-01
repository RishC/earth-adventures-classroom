import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNavbarComponent } from './courses-navbar.component';

describe('CoursesNavbarComponent', () => {
  let component: CoursesNavbarComponent;
  let fixture: ComponentFixture<CoursesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
