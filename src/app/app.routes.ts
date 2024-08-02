import { Routes } from '@angular/router';
import {EventComponentComponent} from "./event-component/event-component.component";
import {DashbordComponentComponent} from "./dashbord-component/dashbord-component.component";
import {UserComponentComponent} from "./user-component/user-component.component";

export const routes: Routes = [
   {path:'Event', component:EventComponentComponent},
   {path:'main', component : DashbordComponentComponent},
   {path:'user' , component:UserComponentComponent}
];

export class AppRoutingModule {
}
