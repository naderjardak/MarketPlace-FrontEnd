import {RoleType} from "./Enum/RoleType";
import {User} from "./User";
import {Privilege} from "./Privilege";

export class Role{
  id!: number;
  RoleType!:RoleType;
  users:User[]=[];
  privileges:Privilege[]=[];
}
