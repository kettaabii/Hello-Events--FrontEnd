  import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../model/contact";


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  urlApi=`http://localhost:8080`
  userUrlApi=`http://localhost:8080/user`
  adminUrlApi=`http://localhost:8080/admin`
  constructor(private http:HttpClient) { }

  sendMessage(contact:Contact){
     this.http.post(`${this.userUrlApi}/sendMessage`,contact)
  }

  showAllMessages():Observable<any>{
    return this.http.get<Array<Contact>>(`${this.adminUrlApi}/contacts`)
  }

}
