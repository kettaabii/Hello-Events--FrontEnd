import { Routes } from '@angular/router';
import {EventComponentComponent} from "./event-component/event-component.component";
import {DashbordComponentComponent} from "./dashbord-component/dashbord-component.component";

export const routes: Routes = [
   {path:'Event', component:EventComponentComponent},
   {path:'main', component : DashbordComponentComponent}
];

export class AppRoutingModule {
}
