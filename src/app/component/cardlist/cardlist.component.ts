import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";

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
    MatCardActions
  ],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {

}
