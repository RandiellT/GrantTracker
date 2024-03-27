
//Taken from Angular (n.d.)
//Standard file convention when a component is generated for a no standlone component

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitReportComponent } from './submit-report.component';

describe('SubmitReportComponent', () => {
  let component: SubmitReportComponent;
  let fixture: ComponentFixture<SubmitReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
