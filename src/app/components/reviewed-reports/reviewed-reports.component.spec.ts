import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedReportsComponent } from './reviewed-reports.component';

describe('ReviewedReportsComponent', () => {
  let component: ReviewedReportsComponent;
  let fixture: ComponentFixture<ReviewedReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewedReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
