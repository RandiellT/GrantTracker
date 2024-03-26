import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewedReports } from '../models/reviewedReport';

@Injectable({
  providedIn: 'root'
})
export class ReviewedReportsService {

    private baseUrl = 'http://localhost:3000/reviewed-reports';

    constructor(private httpClient: HttpClient) { }

    public getAllReviewedReportsAccessReports(): Observable<ReviewedReports[]> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.get<ReviewedReports[]>(url);
      }
  
      public getReviewedReports(id: String): Observable<ReviewedReports> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<ReviewedReports>(url);
      }
  
      public addNewReviewedReport(newReviewedReport: ReviewedReports): Observable<ReviewedReports> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.post<ReviewedReports>(url, newReviewedReport);
      }
  
      public updateReviewedReports(reviewedReports: ReviewedReports): Observable<ReviewedReports> {
        const url = `${this.baseUrl}/${reviewedReports._id}`;
        return this.httpClient.patch<ReviewedReports>(url, reviewedReports);
      }
  
      public deleteReviewedReports(reviewedReports: ReviewedReports) {
        const url = `${this.baseUrl}/${reviewedReports._id}`;
        return this.httpClient.delete(url);
      }
}
