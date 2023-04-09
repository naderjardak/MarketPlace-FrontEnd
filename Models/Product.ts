import {ProductStatus} from "./Enum/ProductStatus";
import {ProductQuantity} from "./ProductQuantity";
import {ProductCategory} from "./ProductCategory";
import {PromotionCode} from "./PromotionCode";
import {Store} from "./Store";
import {Review} from "./Review";
import {SupplierRequest} from "./SupplierRequest";
import {SafeResourceUrl} from "@angular/platform-browser";

export class Product{
  id!: number;
  reference!: string;
  name!: string;
  description!: string;
  productPrice!: number;
  productPriceBeforeDiscount!: number;
  deliveryPrice!: number;
  unityPriceFromSupplier!: number;
  rating!: number;
  automaticRequestAcceptance!: number;
  numberOfRatings!: number;
  quantity!: number;
  productWeight!: number;
  deliveryQuantity!: number;
  enabled!: boolean;
  creationDate!: Date;
  numberOfPurchase!: number;
  productStatus!: ProductStatus;
  additionalDeliveryInstructions!: string;
  image!: string;
  productQuantities: ProductQuantity[] = [];
  productCategory!: ProductCategory;
  promotionCodes: PromotionCode[] = [];
  store!: Store;
  reviews: Review[] = [];
  supplierRequests: SupplierRequest[] = [];

  image1!: string;
  image2!: string;
  image3!: string;

  videoLink!:string;

}

