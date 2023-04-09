import { RequestStatus } from "./Enum/RequestStatus";
import {User} from "./User";
import {Pickup} from "./Pickup";
import {AgencyDeliveryMan} from "./AgencyDeliveryMan";

export class Request{
  id!:number;
  localDateTime!:Date;
  requestStatus!:RequestStatus;
  deliveryman!:User;
  seller!:User;
  agency!:User;
  pickup!:Pickup;
  agencyDeliveryMan!:AgencyDeliveryMan;
}
