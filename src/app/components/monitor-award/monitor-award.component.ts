import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-monitor-award',
  templateUrl: './monitor-award.component.html',
  styleUrl: './monitor-award.component.css',
  template: `
    <mat-card class="demo-inline-calendar-card">
        <mat-calendar [(selected)]="selected"></mat-calendar>
    </mat-card>
    <p>Selected date: {{selected}}</p>
`,

})
export class MonitorAwardComponent {

}
