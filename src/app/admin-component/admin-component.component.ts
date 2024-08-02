import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-admin-component',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent {
  // @ViewChild('eventComponentDiv') eventComponentDiv!: ElementRef;

  // showEventComponent() {
  //   this.eventComponentDiv.nativeElement.style.display = 'block';
  // }
  /*  toggleEventComponent() {
      const currentDisplay = this.eventComponentDiv.nativeElement.style.display;
      this.eventComponentDiv.nativeElement.style.display = currentDisplay === 'none' || currentDisplay === '' ? 'block' : 'none';
    } */
}

@NgModule({
  declarations: [
    // Déclarez les composants ici

    // FullComponent,
    // BlankComponent,
    // SidebarComponent,
    // HeaderComponent,
    // BrandingComponent,
    // AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule,
    RouterModule,
    AdminComponentComponent,
    // Ajoutez RouterModule pour que RouterLink et RouterOutlet fonctionnent
  ],
  exports: [
    TablerIconsModule
  ],
})
export class AppModule { }
