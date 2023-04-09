import {TypeOfGear} from "./Enum/TypeOfGear";
import {AgencyBranch} from "./AgencyBranch";

export class AgencyDeliveryMan {
  id!: number;
  firstName!: string;
  lastName!: string;
  cin!: string;
  gearv!: string;
  governorate!: string;
  city!: string;
  gearmatricuel!:string;
  typeOfGear!: TypeOfGear;
  agencyBranch!: AgencyBranch;
  requests: Request[] = [];
}
