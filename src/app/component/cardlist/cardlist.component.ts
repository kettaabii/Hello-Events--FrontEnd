import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {SearchFormComponent} from "../search-form/search-form.component";
import {EventSharedService} from "../../service/event-shared.service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cardlist',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardImage,
    MatCardContent,
    MatChip,
    MatIcon,
    MatCardActions,
    DatePipe
  ],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {


  constructor(public eventSharedService: EventSharedService,private router:Router) {

  }
  navigateToEventDetails(eventId: string | number | undefined) {
    if (eventId !== undefined) {
      this.router.navigate(['/event-details', eventId]);
    } else {
      console.error('Event ID is undefined');

    }
  }

}
