import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatChip} from "@angular/material/chips";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatChip],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
