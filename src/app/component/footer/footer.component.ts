import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatFormField
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
