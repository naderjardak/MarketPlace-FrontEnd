import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductStatus } from 'Models/Enum/ProductStatus';
import { Product } from 'Models/Product';
import { ProductCategory } from 'Models/ProductCategory';
import { Store } from 'Models/Store';
import { User } from 'Models/User';
import { MessageService } from 'primeng/api';
import { CategoryService } from '../services/category.service';
import { ProductSreviceService } from '../services/product-srevice.service';
import { StoreServiceService } from '../services/store-service.service';
import { UserService } from '../services/user.service';
import { ProductFormDTO } from 'Models/ProductFormDTO';


interface names{
  name:string,code:string
}
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers: [MessageService]

})
export class NewProductComponent implements OnInit {

  product: ProductFormDTO = {
    name: '',
    description: '',
    image: '',
    productPrice: 0,
    quantity: 0,
    productWeight: 0,
    additionalDeliveryInstructions: '',
    image1: '',
    image2: '',
    image3: '',
    productCategory: new ProductCategory,
    storesNames: []
  }
  user!: User;
  uploadedFiles: any[] = [];

  categries: any[] = [];
  subcategries: any[] = [];
  storeNames: names[]=[] ;

  stores: Store[] = [];


  filteredCategories: any[] = [];
  filteredSubCategories: any[] = [];

  selectedCategoryAdvanced: string = '';

  selectedSubAdvanced: string = '';
  value1: any;

  value2: any;

  value3: any;

  value4: any;

  value5: any;

  value6: any;

  value7: any;

  value8: any;

  value9: any;

  value10: any;

  value11: any[] = [];
  value12: any;

  constructor(private prodcutService: ProductSreviceService, private messageService: MessageService, private catgeoryService: CategoryService, private storeService: StoreServiceService, private userService: UserService) { }





  ngOnInit() {

    this.catgeoryService.getAllCategories().subscribe(cat => {
      this.categries = cat;

    });
    this.catgeoryService.getAllSubCategories().subscribe(sub => { this.subcategries = sub });

    this.userService.getUserLoggidIn().subscribe(user => {
      this.user = user; this.stores = this.user.stores; console.log(user);
      console.log(this.stores.length);

      for (let i = 0; i < this.stores.length; i++) {

        this.storeNames.push({name:this.stores[i].name,code:i.toString()})

      }
      console.log(this.storeNames);
    });




  }




  filterCategories(event: any) {
    const filtered: any = [];
    const query = event.query;
    for (let i = 0; i < this.categries.length; i++) {
      const cat = this.categries[i];
      if (cat.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(cat);
      }
    }

    this.filteredCategories = filtered;
  }


  filterSubCategories(event: any) {
    const filtered: any = [];
    const query = event.query;
    for (let i = 0; i < this.subcategries.length; i++) {
      const sub = this.subcategries[i];
      if (sub.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(sub);
      }
    }

    this.filteredSubCategories = filtered;
  }



  onUpload(event: { files: File[]; }) {
    let i = 0;
    for (let file of event.files) {
      console.log(this.user);
      let brandName = this.user.brandName;
      const updatedFile = new File([file], brandName + file.name, { type: file.type });
      this.uploadedFiles.push(updatedFile);
      if (i == 0)
        this.product.image = updatedFile.name;
      if (i == 1)
        this.product.image1 = updatedFile.name;
      if (i == 2)
        this.product.image2 = updatedFile.name;
      if (i == 3)
        this.product.image3 = updatedFile.name;
      i++;

      console.log(this.uploadedFiles);
    }
    //this will fire toast notification after image upload
    this.messageService.add({ severity: 'success', summary: 'File Uploaded', detail: '' });
  }


  add(F: NgForm) {
    console.log(F);
    this.product.productPrice = this.value8;
    this.product.quantity = this.value3;
    this.product.productWeight = this.value4;
    this.product.description = this.value12;
    this.product.additionalDeliveryInstructions = this.value10;
    this.product.name = this.value2;
    this.product.productCategory.name = this.selectedSubAdvanced;
    this.product.productCategory.setCategory(new ProductCategory);
    this.product.productCategory.category.name = this.selectedCategoryAdvanced;
    console.log('test' + this.value11)
    let i = 0;
    for (let s of this.value11) {
      this.product.storesNames[i] = s.name;
      i++;
    }
    console.log(this.value11[0].name);
    console.log(this.product);
    this.prodcutService.createAndAssignCategoryAndSubCategory(this.product).subscribe(res => { console.log('Product created') })
  };



}
