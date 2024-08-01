import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HeaderBodyComponent} from "./header-body/header-body.component";
import {SearchFormComponent} from "./search-form/search-form.component";
import {BodyCrouselComponent} from "./body-crousel/body-crousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderBodyComponent, SearchFormComponent, BodyCrouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloEvent';
}
