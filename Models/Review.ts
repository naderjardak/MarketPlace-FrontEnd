import {ReviewEmotionStatus} from "./Enum/ReviewEmotionStatus";
import {User} from "./User";
import {Product} from "./Product";

export class Review{
  id!:number;
  rating!:number;
  comment!:string;
  emotionStatus!:ReviewEmotionStatus;
  createdAt!:Date;
  userSender!:User;
  DeliveryAgency!:User;
  DeliveryFreelancer!:User;
  product!:Product;
}
