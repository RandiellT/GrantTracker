//Taken from Jensen (2018)
//Only a few modications were made for this to function.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackProposal } from '../models/trackProposal';

@Injectable({
  providedIn: 'root'
})
export class TrackProposalService {

    private baseUrl = 'http://localhost:3000/track-proposals';

    constructor(private httpClient: HttpClient) { }

    public getAllTrackProposal(): Observable<TrackProposal[]> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.get<TrackProposal[]>(url);
      }
  
      public getTrackProposal(id: String): Observable<TrackProposal> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<TrackProposal>(url);
      }
  
      public addTrackProposal(newTrackProposal: TrackProposal): Observable<TrackProposal> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.post<TrackProposal>(url, newTrackProposal);
      }
  
      public updateTrackProposal(trackProposal: TrackProposal): Observable<TrackProposal> {
        const url = `${this.baseUrl}/${trackProposal._id}`;
        return this.httpClient.patch<TrackProposal>(url, trackProposal);
      }
  
      public deleteTrackProposal(trackProposal: TrackProposal) {
        const url = `${this.baseUrl}/${trackProposal._id}`;
        return this.httpClient.delete(url);
      }

}
