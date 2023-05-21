import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegesterComponent } from './user-regester.component';

describe('UserRegesterComponent', () => {
  let component: UserRegesterComponent;
  let fixture: ComponentFixture<UserRegesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
