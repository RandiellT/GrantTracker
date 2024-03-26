import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorAwardComponent } from './monitor-award.component';

describe('MonitorAwardComponent', () => {
  let component: MonitorAwardComponent;
  let fixture: ComponentFixture<MonitorAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorAwardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
