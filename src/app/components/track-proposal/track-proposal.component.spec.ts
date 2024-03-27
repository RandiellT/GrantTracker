
//Taken from Angular (n.d.)
//Standard file convention when a component is generated for a no standlone component

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackProposalComponent } from './track-proposal.component';

describe('TrackProposalComponent', () => {
  let component: TrackProposalComponent;
  let fixture: ComponentFixture<TrackProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackProposalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
