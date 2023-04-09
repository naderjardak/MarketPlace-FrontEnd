import {Role} from "./Role";


export class Privilege {
  id!: number;
  name!: string;
  roles: Role[] = [];

}
