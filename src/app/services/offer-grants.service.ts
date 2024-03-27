//Taken from Jensen (2018)
//Only a few modications were made for this to function. 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Importing model created
import { OfferGrants } from '../models/offerGrants';


@Injectable({
  providedIn: 'root'
})
export class OfferGrantsService {

  private baseUrl = 'http://localhost:3000/offers';

  constructor(private httpClient: HttpClient) { }


	public getAllGrantOffers(): Observable<OfferGrants[]> {
		const url = `${this.baseUrl}/`;
		return this.httpClient.get<OfferGrants[]>(url);
	  }
  
	public getGrantOffer(id: String):Observable<OfferGrants> {
		const url = `${this.baseUrl}/${id}`;
		return this.httpClient.get<OfferGrants>(url);
	  }
  
	  public addGrantOffers(newOfferGrant: OfferGrants): Observable<OfferGrants> {
		const url = `${this.baseUrl}/`;
		return this.httpClient.post<OfferGrants>(url, newOfferGrant);
	  }
  
	  public updateGrantOffers(offerGrant: OfferGrants): Observable<OfferGrants> {
		const url = `${this.baseUrl}/${offerGrant._id}`;
		return this.httpClient.patch<OfferGrants>(url, offerGrant);
	  }
  
	  public deleteGrantOffers(offerGrant: OfferGrants) {
		const url = `${this.baseUrl}/${offerGrant._id}`;
		return this.httpClient.delete(url);
	  }
}

	