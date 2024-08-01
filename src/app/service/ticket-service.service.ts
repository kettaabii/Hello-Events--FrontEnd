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
  

  // Méthode pour ajouter un ticket
  saveTicket(ticket: Ticket , id:number): Observable<any> {
    return this.http.post<any>(`${this.urlApi}/GetYourTicket`+id, ticket);
  }
}
