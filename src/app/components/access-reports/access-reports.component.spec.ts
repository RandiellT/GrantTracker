//Taken from Angular (n.d.)
//Standard file convention when a component is generated for a no standlone component

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessReportsComponent } from './access-reports.component';

describe('AccessReportsComponent', () => {
  let component: AccessReportsComponent;
  let fixture: ComponentFixture<AccessReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
