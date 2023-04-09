import {SupplierRequestStatus} from "./Enum/SupplierRequestStatus";
import {Product} from "./Product";
import {User} from "./User";

export class SupplierRequest {
  id!: number;
  unityPrice!: number;
  deliveryDate!: Date;
  quantity!: number;
  deliveryTime!: Date;
  requestStatus!: SupplierRequestStatus;
  reference!:string;
  product!:Product;
  supplier!:User;
}

