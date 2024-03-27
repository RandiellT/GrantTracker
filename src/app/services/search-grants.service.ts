//Taken from Jensen (2018)
//Only a few modications were made for this to function.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchGrants } from '../models/searchGrants';


@Injectable({
  providedIn: 'root'
})
export class SearchGrantsService {

  private baseUrl = 'http://localhost:3000/search';

  constructor(private httpClient: HttpClient) { }


	public getAllSearchGrantss(): Observable<SearchGrants[]> {
		const url = `${this.baseUrl}/`;
		return this.httpClient.get<SearchGrants[]>(url);
	  }
  
	public getSearchGrants(id: String):Observable<SearchGrants> {
		const url = `${this.baseUrl}/${id}`;
		return this.httpClient.get<SearchGrants>(url);
	  }
  
	  public addSearchGrants(newSearch: SearchGrants): Observable<SearchGrants> {
		const url = `${this.baseUrl}/`;
		return this.httpClient.post<SearchGrants>(url, newSearch);
	  }
  
	  public updateSearchGrants(searchGrants: SearchGrants): Observable<SearchGrants> {
		const url = `${this.baseUrl}/${searchGrants._id}`;
		return this.httpClient.patch<SearchGrants>(url, searchGrants);
	  }
  
	  public deleteSearchGrants(searchGrants: SearchGrants) {
		const url = `${this.baseUrl}/${searchGrants._id}`;
		return this.httpClient.delete(url);
	  }
}

	