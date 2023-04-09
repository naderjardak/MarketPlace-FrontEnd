import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http:HttpClient) { }

  url="http://localhost:8081/User/";

  getUserLoggidIn():Observable<User> {
    const options = { withCredentials: true };

   return this.http.get<User>(this.url+"getUserBySession",options)
  }
}
