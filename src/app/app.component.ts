import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HeaderBodyComponent} from "./header-body/header-body.component";
import {SearchFormComponent} from "./search-form/search-form.component";
import {BodyCrouselComponent} from "./body-crousel/body-crousel.component";
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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderBodyComponent, SearchFormComponent, BodyCrouselComponent, UserComponentComponent, TicketComponentComponent, DashbordComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloEvent';
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
