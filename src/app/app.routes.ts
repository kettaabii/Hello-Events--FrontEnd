import { Routes } from '@angular/router';
import {EventComponentComponent} from "./event-component/event-component.component";

export const routes: Routes = [
  {path:'home', component:EventComponentComponent}
];

export class AppRoutingModule {
}
