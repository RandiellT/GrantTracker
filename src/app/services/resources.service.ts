import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resources } from '../models/resources';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

    private baseUrl = 'http://localhost:3000/resources';

    constructor(private httpClient: HttpClient) { }

        public getAllResources(): Observable<Resources[]> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.get<Resources[]>(url);
        }

        public getResources(id: String): Observable<Resources> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<Resources>(url);
        }

        public addResources(newResources: Resources): Observable<Resources> {
        const url = `${this.baseUrl}/`;
        return this.httpClient.post<Resources>(url, newResources);
        }

        public updateResources(resources: Resources): Observable<Resources> {
        const url = `${this.baseUrl}/${resources._id}`;
        return this.httpClient.patch<Resources>(url, resources);
        }

        public deleteResources(resources: Resources) {
        const url = `${this.baseUrl}/${resources._id}`;
        return this.httpClient.delete(url);
        }
}

