//Taken from Jensen (2018)
//Only a few modications were made for this to function.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApproveProposal } from '../models/approveProposal';

@Injectable({
  providedIn: 'root'
})
export class ApproveProposalService {

    private baseUrl = 'http://localhost:3000/approve-proposals';

    constructor(private httpClient: HttpClient) { }

    public getAllApproveProposal(): Observable<ApproveProposal[]> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.get<ApproveProposal[]>(url);
      }
  
      public getApproveProposal(id: String): Observable<ApproveProposal> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<ApproveProposal>(url);
      }
  
      public addApproveProposal(newApproveProposal: ApproveProposal): Observable<ApproveProposal> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.post<ApproveProposal>(url, newApproveProposal);
      }
  
      public updateApproveProposal(approveProposal: ApproveProposal): Observable<ApproveProposal> {
        const url = `${this.baseUrl}/${approveProposal._id}`;
        return this.httpClient.patch<ApproveProposal>(url, approveProposal);
      }
  
      public deleteApproveProposal(approveProposal: ApproveProposal) {
        const url = `${this.baseUrl}/${approveProposal._id}`;
        return this.httpClient.delete(url);
      }

}
