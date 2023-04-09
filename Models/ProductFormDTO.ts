import { ProductCategory } from './ProductCategory';

export class ProductFormDTO {
  name!: string;
  description!: string;
  image!: string;
  productPrice!: number;
  quantity!: number;
  productWeight!: number;
  additionalDeliveryInstructions!: string;
  image1!: string;
  image2!: string;
  image3!: string;
  productCategory!: ProductCategory;
  storesNames!: string[];
}