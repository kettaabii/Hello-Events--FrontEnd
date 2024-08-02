import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {HeroCardComponent} from "../hero-card/hero-card.component";

@Component({
  selector: 'app-body-crousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule, HeroCardComponent],
  templateUrl: './body-crousel.component.html',
  styleUrl: './body-crousel.component.css'
})
export class BodyCrouselComponent {

}
