import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  private apiUrl = 'http://localhost:8080/role';

  constructor(private http:HttpClient) { }


  getUserRole(){
    return this.http.get<{role:string}>(this.apiUrl);
  }
}
