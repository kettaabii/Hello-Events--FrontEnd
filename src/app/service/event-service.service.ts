import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventCategory} from "../enum/event-category";
import {Localisation} from "../enum/localisation";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  searchUrl=`http://localhost:8080/search`
  urlApi=`http://localhost:8080`
  userUrlApi=`http://localhost:8080/user`
  adminUrlApi=`http://localhost:8080/admin`
  constructor(private http:HttpClient) { }

  /*addEvenement(event:Event):Observable<Event>{
    return this.http.post(`${this.adminUrlApi}/addEvent`,event)
  }*/


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


  SearchEvents(eventName: string, eventDate: string, lieu: Localisation): Observable<Event[]> {
    let params = new HttpParams();
    if (eventName) params = params.set('eventName', eventName);
    if (eventDate) params = params.set('eventDate', eventDate);
    if (lieu) params = params.set('location', lieu);




    return this.http.get<Event[]>(this.searchUrl, { params });
  }
}
