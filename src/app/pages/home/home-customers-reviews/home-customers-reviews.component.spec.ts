import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomersReviewsComponent } from './home-customers-reviews.component';

describe('HomeCustomersReviewsComponent', () => {
  let component: HomeCustomersReviewsComponent;
  let fixture: ComponentFixture<HomeCustomersReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCustomersReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCustomersReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
