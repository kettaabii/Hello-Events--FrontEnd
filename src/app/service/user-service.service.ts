import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../model/ticket";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {requiresInlineTypeCheckBlock} from "@angular/compiler-cli/src/ngtsc/typecheck/src/tcb_util";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
api:`http://localhost:8080`
  constructor(private http:HttpClient) { }


ListUser(user:User):Observable<User> {
  return this.http.get(`${this.api}/admin/ListUsers`)

}
DeleteUser(id:number):Observable<any>{
  return this.http.delete(`${this.api}/deleteUser/`+id)
}


}
