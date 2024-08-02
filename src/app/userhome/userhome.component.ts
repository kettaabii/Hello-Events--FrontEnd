import {HttpClient} from "@angular/common/http";
import { Component } from '@angular/core';
import {BodyCrouselComponent} from "../component/body-crousel/body-crousel.component";
import {CardlistComponent} from "../component/cardlist/cardlist.component";
import {DashbordComponentComponent} from "../dashbord-component/dashbord-component.component";
import {FooterComponent} from "../component/footer/footer.component";
import {HeaderBodyComponent} from "../component/header-body/header-body.component";
import {HeaderComponent} from "../component/header/header.component";
import {SearchFormComponent} from "../component/search-form/search-form.component";


@Component({
  selector: 'app-userhome',
  standalone: true,
    imports: [
        BodyCrouselComponent,
        CardlistComponent,
        DashbordComponentComponent,
        FooterComponent,
        HeaderBodyComponent,
        HeaderComponent,
        SearchFormComponent

    ],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {

}
