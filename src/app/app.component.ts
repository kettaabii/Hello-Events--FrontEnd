import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HeaderBodyComponent} from "./header-body/header-body.component";
import {SearchFormComponent} from "./search-form/search-form.component";
import {BodyCrouselComponent} from "./body-crousel/body-crousel.component";
import {UserComponentComponent} from "./user-component/user-component.component";
import {TicketComponentComponent} from "./ticket-component/ticket-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderBodyComponent, SearchFormComponent, BodyCrouselComponent, UserComponentComponent, TicketComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloEvent';
}
