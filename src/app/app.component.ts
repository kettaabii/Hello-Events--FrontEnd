import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

import {HeaderComponent} from "./component/header/header.component";
import {HeaderBodyComponent} from "./component/header-body/header-body.component";
import {SearchFormComponent} from "./component/search-form/search-form.component";
import {BodyCrouselComponent} from "./component/body-crousel/body-crousel.component";
import {CardlistComponent} from "./component/cardlist/cardlist.component";
import {FooterComponent} from "./component/footer/footer.component";
import {UserComponentComponent} from "./user-component/user-component.component";
import {TicketComponentComponent} from "./ticket-component/ticket-component.component";
import {DashbordComponentComponent} from "./dashbord-component/dashbord-component.component";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';


// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {EventComponentComponent} from "./event-component/event-component.component";



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, HeaderComponent, HeaderBodyComponent, SearchFormComponent, BodyCrouselComponent, UserComponentComponent, TicketComponentComponent, DashbordComponentComponent, EventComponentComponent, RouterLink],




  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloEvent';
  @ViewChild('eventComponentDiv') eventComponentDiv!: ElementRef;
  // showEventComponent() {
  //   this.eventComponentDiv.nativeElement.style.display = 'block';
  // }
  toggleEventComponent() {
    const currentDisplay = this.eventComponentDiv.nativeElement.style.display;
    this.eventComponentDiv.nativeElement.style.display = currentDisplay === 'none' || currentDisplay === '' ? 'block' : 'none';
  }
}





//Import Layouts
//import { FullComponent } from './layouts/full/full.component';
//import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
// import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
// import { HeaderComponent } from './layouts/full/header/header.component';
// import { BrandingComponent } from './layouts/full/sidebar/branding.component';
// import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';

@NgModule({
  declarations: [

   // AppComponent
   // FullComponent,
    //BlankComponent,
    //SidebarComponent,
   // HeaderComponent,
   // BrandingComponent,
  //  AppNavItemComponent,
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
    AppComponent,
  ],
  exports: [TablerIconsModule],

})
export class AppModule {}
