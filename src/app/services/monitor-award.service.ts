//Taken from Jensen (2018)
//Only a few modications were made for this to function.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonitorAward } from '../models/monitorAward';

@Injectable({
  providedIn: 'root'
})
export class MonitorAwardService {

    private baseUrl = 'http://localhost:3000/monitor-award';

    constructor(private httpClient: HttpClient) { }

    public getAllMonitorAward(): Observable<MonitorAward[]> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.get<MonitorAward[]>(url);
      }
  
      public getMonitorAward(id: String): Observable<MonitorAward> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<MonitorAward>(url);
      }
  
      public addNewAward(newAward: MonitorAward): Observable<MonitorAward> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.post<MonitorAward>(url, newAward);
      }
  
      public updateMonitorAward(monitorAward: MonitorAward): Observable<MonitorAward> {
        const url = `${this.baseUrl}/${monitorAward._id}`;
        return this.httpClient.patch<MonitorAward>(url, monitorAward);
      }
  
      public deleteMonitorAward(monitorAward: MonitorAward) {
        const url = `${this.baseUrl}/${monitorAward._id}`;
        return this.httpClient.delete(url);
      }
}
