//Taken from Jensen (2018)
//Taken from Angular (n.d.)
//Standard file convention when a component is generated for a no standlone component

import { Component } from '@angular/core';

//Taken from Angular Material (n.d.)
//import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-monitor-award',
  templateUrl: './monitor-award.component.html',
  styleUrl: './monitor-award.component.css',
  template: `
    <!--Taken from Angular Material (n.d.)-->
    <mat-card class="demo-inline-calendar-card">
        <mat-calendar [(selected)]="selected"></mat-calendar>
    </mat-card>
    <p>Selected date: {{selected}}</p>
    
`
,

})
export class MonitorAwardComponent {

}
