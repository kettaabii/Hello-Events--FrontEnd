import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  urlApi=`http://localhost:8080`
  userUrlApi=`http://localhost:8080/user`
  adminUrlApi=`http://localhost:8080/admin`
  constructor(private http:HttpClient) { }

  addEvenement(event:Event):Observable<Event>{
    return this.http.post(`${this.adminUrlApi}/addEvent`,event)
  }
  AfficherListEvents():Observable<any>{
    return this.http.get<Array<Event>>(`${this.urlApi}/getEvents`)
  }
  AfficherEvent(idEvent:Number):Observable<any>{
    return this.http.get<Event>(`${this.urlApi}/getEvent`+idEvent)
  }
  deleteEvent(id:Number):Observable<any>{
    return this.http.delete(`${this.adminUrlApi}/deleteEvent/`+id)
  }
  UpdateEvent(id:Number,event:Event):Observable<any>{
    return this.http.put(`${this.adminUrlApi}/updateEvent/`+id , event)
  }
}
