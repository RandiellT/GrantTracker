
//Taken from Angular (n.d.)
//Standard file convention when a component is generated for a no standlone component

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGrantsComponent } from './search-grants.component';

describe('SearchGrantsComponent', () => {
  let component: SearchGrantsComponent;
  let fixture: ComponentFixture<SearchGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchGrantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
