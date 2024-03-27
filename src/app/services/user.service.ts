//Taken from Jensen (2018)
//Only a few modications were made for this to function.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) { }

    public getAllUsers(): Observable<Users[]> {
      const url = `${this.baseUrl}/`;
      return this.httpClient.get<Users[]>(url);
    }

    public getUser(id: String): Observable<Users> {
      const url = `${this.baseUrl}/${id}`;
      return this.httpClient.get<Users>(url);
    }

    public addUser(newUsers: Users): Observable<Users> {
      const url = `${this.baseUrl}/`;
      return this.httpClient.post<Users>(url, newUsers);
    }

    public updateUsers(user: Users): Observable<Users> {
      const url = `${this.baseUrl}/${user._id}`;
      return this.httpClient.patch<Users>(url, user);
    }

    public deleteUsers(user: Users) {
      const url = `${this.baseUrl}/${user._id}`;
      return this.httpClient.delete(url);
    }
}