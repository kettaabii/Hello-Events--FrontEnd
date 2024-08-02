import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {EventSharedService} from "../service/event-shared.service";
import {MatChip} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {TicketServiceService} from "../service/ticket-service.service";
import {Ticket} from "../model/ticket";
import {HttpClientModule} from "@angular/common/http";
import {saveAs} from "file-saver";


@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChip, MatIcon,HttpClientModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit{
  event: any;
  ticket: { ticketPrice: string; ticketCode: string; ticketId: string; ticketDate: string } = {
    ticketId:'',
    ticketPrice:'',
    ticketDate:'',
    ticketCode:'',
  }
  constructor(
    private route: ActivatedRoute,
    private eventSharedService: EventSharedService,
    private router: Router,
    private ticketService:TicketServiceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const eventId = params.get('id');
      if (eventId) {
        this.event = this.eventSharedService.events().find(e => e.eventId.toString() === eventId);
      }
    });
  }
  bookTICKET(eventId: number): void {
    this.ticketService.saveTicket(this.ticket, eventId).subscribe({
      next: (response: Blob) => {
        // Use FileSaver.js to save the blob as a file
        const fileName = `ticket_${eventId}.pdf`;
        saveAs(response, fileName);
      },
      error: (err) => {
        console.error('Error booking ticket', err);
      }
    });
  }

}
