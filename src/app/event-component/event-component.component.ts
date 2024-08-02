import {Component, OnInit} from '@angular/core';
import {Ev} from "../model/event";
import {EventServiceService} from "../service/event-service.service";
import {CurrencyPipe, DatePipe, NgFor} from "@angular/common";

@Component({
  selector: 'app-event-component',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
      NgFor,
  ],
  templateUrl: './event-component.component.html',
  styleUrl: './event-component.component.css'
})
export class EventComponentComponent implements OnInit{

  Getevent: Ev[] = [];

  ngOnInit(): void {
    this.ListEvent()


  }


  constructor(private eventService: EventServiceService) {
  }


  ListEvent(): void {
    this.eventService.AfficherListEvents().subscribe((data: Ev[]) => {
      this.Getevent = data;

    })
  }

  deleteEvent(eventId: number): void {
    this.eventService.deleteEvent(eventId).subscribe(
      response => {
        console.log('Event deleted successfully', response);
        this.Getevent = this.Getevent.filter((event: Ev ) => event.eventId !== eventId);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}

