import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmitReports } from '../models/submitReport';

@Injectable({
  providedIn: 'root'
})
export class SubmitReportsService {

    private baseUrl = 'http://localhost:3000/submit-reports';

    constructor(private httpClient: HttpClient) { }

    public getAllSubmitReports(): Observable<SubmitReports[]> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.get<SubmitReports[]>(url);
      }
  
      public getSubmitReports(id: String): Observable<SubmitReports> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<SubmitReports>(url);
      }
  
      public addNewSubmitReports(newSubmit: SubmitReports): Observable<SubmitReports> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.post<SubmitReports>(url, newSubmit);
      }
  
      public updateSubmitReports(submitReports: SubmitReports): Observable<SubmitReports> {
        const url = `${this.baseUrl}/${submitReports._id}`;
        return this.httpClient.patch<SubmitReports>(url, submitReports);
      }
  
      public deleteSubmitReports(submitReports: SubmitReports) {
        const url = `${this.baseUrl}/${submitReports._id}`;
        return this.httpClient.delete(url);
      }
}
