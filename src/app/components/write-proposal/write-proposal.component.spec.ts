import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteProposalComponent } from './write-proposal.component';

describe('WriteProposalComponent', () => {
  let component: WriteProposalComponent;
  let fixture: ComponentFixture<WriteProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteProposalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
