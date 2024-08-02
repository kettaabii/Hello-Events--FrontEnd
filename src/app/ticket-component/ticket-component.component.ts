import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from '../service/ticket-service.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Ticket } from '../model/ticket';

@Component({
  selector: 'app-ticket-component',
  standalone: true,
  templateUrl: './ticket-component.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./ticket-component.component.css']
})
export class TicketComponentComponent implements OnInit {
  AddTicketForm: FormGroup;

  constructor(private ticketService: TicketServiceService, private fb: FormBuilder) {
    this.AddTicketForm = this.fb.group({
      ticketId: ['', Validators.required],
      ticketPrice: ['', Validators.required],
      ticketDate: ['', Validators.required],
      ticketCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Vous pouvez mettre ici des appels supplémentaires à l'initialisation si nécessaire
  }

  saveTicket(): void {
    if (this.AddTicketForm.valid) {
      const ticket: Ticket = this.AddTicketForm.value;
      this.ticketService.saveTicket(ticket).subscribe(
        (response: any) => {
          console.log('Ticket saved successfully', response);
        },
        (error: any) => {
          console.error('Error saving ticket', error);
        }
      );
    }
  }
}
