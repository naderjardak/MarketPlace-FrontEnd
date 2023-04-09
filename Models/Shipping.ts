import {User} from "./User";

export class Shipping{
  id!: number;
  governorate!: string;
  city!: string;
  gpsPoint!: string
  buyer!:User;
}
