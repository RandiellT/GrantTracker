//Taken from Jensen (2018)
//Only a few modications were made for this to function.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WriteProposal } from '../models/writeProposal';

@Injectable({
  providedIn: 'root'
})
export class WriteProposalService {

    private baseUrl = 'http://localhost:3000/approve-proposals';

    constructor(private httpClient: HttpClient) { }

    public getAllWriteProposal(): Observable<WriteProposal[]> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.get<WriteProposal[]>(url);
      }
  
      public getWriteProposal(id: String): Observable<WriteProposal> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<WriteProposal>(url);
      }
  
      public addWriteProposal(newProposal: WriteProposal): Observable<WriteProposal> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.post<WriteProposal>(url, newProposal);
      }
  
      public updateWriteProposal(writeProposal: WriteProposal): Observable<WriteProposal> {
        const url = `${this.baseUrl}/${writeProposal._id}`;
        return this.httpClient.patch<WriteProposal>(url, writeProposal);
      }
  
      public deleteWriteProposal(writeProposal: WriteProposal) {
        const url = `${this.baseUrl}/${writeProposal._id}`;
        return this.httpClient.delete(url);
      }

}
