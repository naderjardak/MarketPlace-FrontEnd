import {ClaimSavStatusType} from "./Enum/ClaimSavStatusType";
import {ClaimSavType} from "./Enum/ClaimSavType";
import {User} from "./User";
import {ProductQuantity} from "./ProductQuantity";

export class ClaimSav {
  id!: number;
  reference!: string;
  object!: string;
  body!: string;
  screenshot!: string;
  status!: ClaimSavStatusType;
  ClaimSavType!: ClaimSavType;
  createdAt!: Date;
  updatedAt!: Date;
  user!: User;
  productQuantity!: ProductQuantity;
}
