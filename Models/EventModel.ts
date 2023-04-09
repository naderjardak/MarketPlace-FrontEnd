import {User} from "./User";
import {KeyWords} from "./KeyWords";
import {Product} from "./Product";

export class EventModel{
  id!: number;
  title!: string;
  bandLing!: string;
  lastDate!: Date;
  startDate!: Date;
  user!:User;
  listkeyWords:KeyWords[]=[];
  productList:Product[]=[];
}
