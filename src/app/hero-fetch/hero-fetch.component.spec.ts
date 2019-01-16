import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFetchComponent } from './hero-fetch.component';

describe('HeroFetchComponent', () => {
  let component: HeroFetchComponent;
  let fixture: ComponentFixture<HeroFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
