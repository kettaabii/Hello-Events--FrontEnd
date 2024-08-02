import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatCardModule, MatCardContent } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from '@angular/common';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord-component.component.html',
  styleUrls: ['./dashbord-component.component.css'],
  imports: [
    RouterLink,
    MatFormFieldModule,
    MatLabel,
    MatCardModule,
    MatCardContent,
    MatCheckboxModule,
    CommonModule,
    MatButton,
    MatInput,
    MatAnchor
  ],
  standalone: true
})
export class DashbordComponentComponent {
  constructor() {}
}
