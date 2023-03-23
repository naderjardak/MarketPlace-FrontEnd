export class ProductOrder {
      id: number;
      reference: string;
      name: string;
      description: string;
      productPrice: number;
      productPriceBeforeDiscount: number;
      deliveryPrice: number;
      unityPriceFromSupplier: number;
      rating: number;
      automaticRequestAcceptance: boolean;
      numberOfRatings: number;
      quantity: number;
      productWeight: number;
      deliveryQuantity: number;
      enabled: boolean;
      creationDate: Date;
      numberOfPurchase: number;
      additionalDeliveryInstructions: string;
      image: string;
}
