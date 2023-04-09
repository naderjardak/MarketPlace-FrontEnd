import {Shipping} from "./Shipping";
import {StatusOrderType} from "./Enum/StatusOrderType";
import {PromotionCode} from "./PromotionCode";
import {User} from "./User";
import {ProductQuantity} from "./ProductQuantity";
import {Pickup} from "./Pickup";
import {PaymentType} from "./Enum/PaymentType";

export class Order{
  id!: number;
  ref!: string;
  sum!: number;
  deliveryPrice!: number;
  productsWeightKg!: number;
  orderCode!: number;
  payment!: PaymentType;
  status!: StatusOrderType;
  creationDate!: Date;
  pickups:Pickup[]=[];
  shipping!: Shipping;
  buyer!:User;
  productQuantities:ProductQuantity[]=[];
  promotionCodeList: PromotionCode[]=[];

}
