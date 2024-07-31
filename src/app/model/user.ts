import {Ticket} from "./ticket";

export interface User {
  userId:number
  name:string
  username:string
  password:string
  role:role
  tickets:Array<Ticket>


}
