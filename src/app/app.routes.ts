import { Routes } from '@angular/router';
import {EventComponentComponent} from "./event-component/event-component.component";
import {DashbordComponentComponent} from "./dashbord-component/dashbord-component.component";
import {UserComponentComponent} from "./user-component/user-component.component";
import {ContactComponentComponent} from "./contact-component/contact-component.component";

export const routes: Routes = [
   {path:'event', component:EventComponentComponent},
   {path:'user' , component:UserComponentComponent},
   {path:'contact',component:ContactComponentComponent}
];

export class AppRoutingModule {
}
