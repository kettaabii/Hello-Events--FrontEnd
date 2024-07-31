import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-body-crousel',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatCardModule,MatChipsModule],
  templateUrl: './body-crousel.component.html',
  styleUrl: './body-crousel.component.css'
})
export class BodyCrouselComponent {

}
