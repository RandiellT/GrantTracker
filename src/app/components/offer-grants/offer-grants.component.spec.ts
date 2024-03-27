
//Taken from Angular (n.d.)
//Standard file convention when a component is generated for a no standlone component

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferGrantsComponent } from './offer-grants.component';

describe('OfferGrantsComponent', () => {
  let component: OfferGrantsComponent;
  let fixture: ComponentFixture<OfferGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferGrantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
