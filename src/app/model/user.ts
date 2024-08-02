import {Ticket} from "./ticket";
import {Role} from "../enum/role";

export interface User {
  userId:number
  name:string
  username:string
  password:string
  role:Role
  tickets:Array<Ticket>


}
