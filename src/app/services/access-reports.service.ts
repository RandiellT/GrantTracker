import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessReports } from '../models/accessReports';

@Injectable({
  providedIn: 'root'
})
export class AccessReportsService {

    private baseUrl = 'http://localhost:3000/access-reports';

    constructor(private httpClient: HttpClient) { }

    public getAllAccessReports(): Observable<AccessReports[]> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.get<AccessReports[]>(url);
      }
  
      public getAccessReports(id: String): Observable<AccessReports> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<AccessReports>(url);
      }
  
      public addNewReport(newReport: AccessReports): Observable<AccessReports> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.post<AccessReports>(url, newReport);
      }
  
      public updateAccessReports(accessReports: AccessReports): Observable<AccessReports> {
        const url = `${this.baseUrl}/${accessReports._id}`;
        return this.httpClient.patch<AccessReports>(url, accessReports);
      }
  
      public deleteAccessReports(accessReports: AccessReports) {
        const url = `${this.baseUrl}/${accessReports._id}`;
        return this.httpClient.delete(url);
      }
}
