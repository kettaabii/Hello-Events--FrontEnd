import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  private urlApi = 'http://localhost:8080/user';  // L'URL de base de votre API

  constructor(private http: HttpClient) { }


  saveTicket(ticket: {
    ticketPrice: string;
    ticketCode: string;
    ticketId: string;
    ticketDate: string
  }, id: number): Observable<Blob> {
   return this.http.post<Blob>(`${this.urlApi}/GetYourTicket`+id, ticket,{ responseType: 'blob' as 'json' });
 }
}
