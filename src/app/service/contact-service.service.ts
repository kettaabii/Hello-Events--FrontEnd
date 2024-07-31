import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../model/contact";


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  urlApi=`http://localhost:8080`

  constructor(private http:HttpClient) { }

  sendMessage(Contact):Observable<Contact>{

    return this.http.post()
  }

}
