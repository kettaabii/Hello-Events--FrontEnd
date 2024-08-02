import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventSharedService {
  events=signal<any[]>([]);
  updateEvents(newEvents: Event[]) {
    this.events.set(newEvents)
  }


  constructor() { }
}
