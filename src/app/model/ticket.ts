import {User} from "./user";

export interface Ticket {
  ticketId:number
  ticketPrice:number
  ticketDate:Date
  ticketCode:string
  event:Event
  user:User
}
