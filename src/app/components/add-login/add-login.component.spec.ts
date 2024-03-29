import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoginComponent } from './add-login.component';

describe('AddLoginComponent', () => {
  let component: AddLoginComponent;
  let fixture: ComponentFixture<AddLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
