import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'Models/User';
import { BehaviorSubject, map, Observable } from 'rxjs';


const httpOptions ={
  headers :new HttpHeaders({'Content-Type':'application/json'})
};
const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private currentUserSubject !:BehaviorSubject<any>;
  public currentUser!:Observable<any>;
  


  constructor( private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    this.currentUser=this.currentUserSubject.asObservable();
  }
  
   public get currentUserValue(): any {
    return this.currentUserSubject.value;
   }

  
     register (user: User):Observable<Object>{

      console.log(user);
      return this.http.post('http://localhost:8081/User/add',user);
     }
   
    login(email: string, password: string){
   
   return this.http.post<any>('http://localhost:8081/Authentication/auth',{ login: email, password: password },httpOptions)
   .pipe(map(user => {
    if (user && user.token){
      localStorage.setItem('currentUser',JSON.stringify(user));
    }
    return user;

   }));

  
 
    }}







