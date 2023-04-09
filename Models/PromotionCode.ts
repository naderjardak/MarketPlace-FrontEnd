import {Product} from "./Product";


export class PromotionCode{
  id!: number;
  voucher!:string;
  discountValue!:number;
  startDate!:Date;
  EndtDate!:Date;
  product!:Product;
}
