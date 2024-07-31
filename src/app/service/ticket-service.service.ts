import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../model/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  urlApi=`http://localhost:8080/user`

  constructor(private http:HttpClient) { }


  getyourTicket(ticket:Ticket):Observable<Ticket>{
    return this.http.post(`${this.urlApi}"/GetYourTicket/{id}`,ticket)
  }
}
