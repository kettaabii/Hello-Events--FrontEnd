import {Ticket} from "./ticket";
import {Localisation} from "../enum/localisation";
import {EventCategory} from "../enum/event-category";

export interface Ev {
  eventId:number
  eventName:string
  eventDescription:string
  picture:string
  location:Localisation
  eventDate:Date
  eventStartTime:Date
  eventCategory:EventCategory
  seats : number
  ticketPrice:number
  ticketlist:Array<Ticket>

}
