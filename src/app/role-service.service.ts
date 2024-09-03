import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  private apiUrl = 'https://nameless-tundra-21093-39f61fc7025f.herokuapp.com/role';

  constructor(private http:HttpClient) { }


  getUserRole(){
    return this.http.get<{role:string}>(this.apiUrl);
  }
}
