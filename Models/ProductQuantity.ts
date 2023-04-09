import {Product} from "./Product";
import {ClaimSav} from "./ClaimSav";
import {Order} from "./Order";

export class ProductQuantity{
  id!: number;
  quantity!: number;
  product!: Product;
  order!:Order;
  claimSav!: ClaimSav;
}
