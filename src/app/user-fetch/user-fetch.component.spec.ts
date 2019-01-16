import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFetchComponent } from './user-fetch.component';

describe('UserFetchComponent', () => {
  let component: UserFetchComponent;
  let fixture: ComponentFixture<UserFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
