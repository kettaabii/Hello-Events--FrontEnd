import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./component/header/header.component";
import {HeaderBodyComponent} from "./component/header-body/header-body.component";
import {SearchFormComponent} from "./component/search-form/search-form.component";
import {BodyCrouselComponent} from "./component/body-crousel/body-crousel.component";
import {CardlistComponent} from "./component/cardlist/cardlist.component";
import {FooterComponent} from "./component/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderBodyComponent, SearchFormComponent, BodyCrouselComponent, CardlistComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloEvent';
}
