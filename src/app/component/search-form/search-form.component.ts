import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { EventServiceService } from "../../service/event-service.service";
import { Router } from "@angular/router";
import { Localisation } from "../../enum/localisation";
import { NgForOf, NgFor } from "@angular/common";

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, NgForOf, NgFor],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent implements OnInit {
  searchform!: FormGroup;
  listEvents: any;
  localisation = Localisation;
  keys!: string[];

  constructor(
    private fb: FormBuilder,
    private eventService: EventServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.keys = Object.values(this.localisation).filter((value) => typeof value === 'string');
    this.initForm();
  }

  initForm() {
    this.searchform = this.fb.group({
      eventName: '',
      lieu: '',
      date: '',
      description: ''
    });
  }

  searchEvent(): void {
    let { eventName, lieu, date } = this.searchform.value;
    console.log("eventName: " + eventName);
    this.eventService.SearchEvents(eventName, date, lieu).subscribe(res => {
      this.listEvents = res;
      console.log(res);
    });
  }
}
