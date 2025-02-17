import { Routes } from '@angular/router';

import {EventDetailsComponent} from "./event-details/event-details.component";
import {CardlistComponent} from "./component/cardlist/cardlist.component";
import {UserhomeComponent} from "./userhome/userhome.component";
import {DashbordComponentComponent} from "./dashbord-component/dashbord-component.component";
import {AuthGuard} from "./auth-guard";
import {EventComponentComponent} from "./event-component/event-component.component";
import {DashbordComponentComponent} from "./dashbord-component/dashbord-component.component";
import {UserComponentComponent} from "./user-component/user-component.component";
import {ContactComponentComponent} from "./contact-component/contact-component.component";

export const routes: Routes = [
  {
    path: 'login',
    component: DashbordComponentComponent

  },
  { path: 'event-details/:id', component: EventDetailsComponent,canActivate: [AuthGuard] },
  { path: '', component:UserhomeComponent  },
   {path:'event', component:EventComponentComponent},
   {path:'user' , component:UserComponentComponent},
   {path:'contact',component:ContactComponentComponent},
  { path: '**', redirectTo: 'home' }



  

];

export class AppRoutingModule {
}
