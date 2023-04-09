import {Product} from "./Product";
import {User} from "./User";
import {Pickup} from "./Pickup";

export class Store{
id!:number;
name!:string;
governorate!:string;
city!:string;
x!:string;
y!:string;
IBAN!:string;
products:Product[]=[];
seller!:User;
requestsellers:Request[]=[];
pickups:Pickup[]=[];
}
