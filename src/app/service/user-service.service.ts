import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {User} from "../model/user";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  api=`http://localhost:8080`
  constructor(private http:HttpClient) { }

  ListUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/admin/ListUsers`);
  }

  DeleteUser(id:number):Observable<any>{
  return this.http.delete(`${this.api}/deleteUser/`+id)
}


}
