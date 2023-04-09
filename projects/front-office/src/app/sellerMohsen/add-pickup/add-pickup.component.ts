import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'Models/Order';
import { Pickup } from 'Models/Pickup';
import { Shipping } from 'Models/Shipping';
import { User } from 'Models/User';
import { PickupService } from '../servicesM/pickup.service';
import { StatusPickupSeller } from 'Models/Enum/StatusPickupSeller';
import { StatusPickupBuyer } from 'Models/Enum/StatusPickupBuyer';


@Component({
  selector: 'app-add-pickup',
  templateUrl: './add-pickup.component.html',
  styleUrls: ['./add-pickup.component.scss']
})
export class AddPickupComponent {

  constructor(private pickupService:PickupService,private http:HttpClient,private r:ActivatedRoute,private route:Router){}

  idOrder!:number;
  idStore!:number;

   pickup!: Pickup ;
  ngOnInit(){
    this.r.params.subscribe(params => {
      this.idOrder = params['idOrder'];
      this.idStore = params['idStore'];
    });
    this.getOrderById(this.idOrder);
    this.getShippingByOrder(this.idOrder);
    this.GetBuyerByOrder(this.idOrder);
  }
  ///Add Pickup and assign to Order And Store
  addForm(_t7: NgForm) {
    this.pickup=new Pickup();
    this.pickup.statusPickupSeller=StatusPickupSeller.PICKED;
    this.pickup.statusPickupBuyer=StatusPickupBuyer.PLACED;
    this.pickup.dateCreationPickup=new Date(),
    this.pickup.governorate=_t7.controls['governorate'].value;
    this.pickup.city=_t7.controls['city'].value;
    this.pickup.comment=_t7.controls['comment'].value;
    this.pickup.secondPhoneNumber=_t7.controls['secondphoneNumber'].value;
    this.pickup.availableDeliver=_t7.controls['availability'].value;
    this.pickupService.addPickup(this.pickup,this.idOrder,this.idStore).subscribe
    (res =>{console.log('Pickup created');this.route.navigateByUrl('/Seller/pickups');})
  };

  governorates = [
    { name: 'Ariana', cities: ['Ariana', 'Raoued', 'Sidi Thabet'] },
    { name: 'Béja', cities: ['Béja', 'Medjez el-Bab', 'Téboursouk', 'Testour'] },
    { name: 'Ben Arous', cities: ['Ben Arous', 'Bou Mhel el-Bassatine', 'El Mourouj', 'Ezzahra', 'Hammam Chott', 'Mornag', 'Rades'] },
    { name: 'Bizerte', cities: ['Bizerte', 'Mateur', 'Menzel Bourguiba', 'Ras Jebel', 'Sejnane', 'Tinja', 'Utique', 'Zarzouna'] },
    { name: 'Gabès', cities: ['Gabès', 'El Hamma', 'Ghannouch', 'Matmata', 'Métouia', 'Nouvelle Matmata'] },
    { name: 'Gafsa', cities: ['Gafsa', 'El Ksar', 'Ksar Ghilane', 'Mdhilla', 'Métlaoui', 'Redeyef', 'Sened', 'Sidi Aïch'] },
    { name: 'Jendouba', cities: ['Jendouba', 'Aïn Draham', 'Balta-Bou Aouane', 'Bou Salem', 'Fernana', 'Ghardimaou', 'Oued Mliz', 'Tabarka'] },
    { name: 'Kairouan', cities: ['Kairouan', 'Alaa', 'Bou Hajla', 'Chebika', 'Haffouz', 'Oueslatia', 'Sbikha', 'Sidi Bou Ali'] },
    { name: 'Kasserine', cities: ['Kasserine', 'Sbeitla', 'Thala', 'Foussana', 'Haïdra', 'Hidra', 'Jedelienne', 'Feriana', 'El Ayoun'] },
    { name: 'Kébili', cities: ['Kébili', 'Douz', 'Faouar', 'Kébili Nord', 'Souk Lahad'] },
    { name: 'Le Kef', cities: ['Le Kef', 'Dahmani', 'Kalâat Khasba', 'Nebeur', 'Sakiet Sidi Youssef', 'Sers', 'Tajerouine', 'Kalaat Senan'] },
    { name: 'Mahdia', cities: ['Mahdia', 'Bou Merdes', 'Chebba', 'El Jem', 'Essouassi', 'Hebira', 'Ksour Essef', 'Melloulèche', 'Ouled Chamekh', 'Souassi'] },
    { name: 'Manouba', cities: ['Manouba', 'Borj El Amri', 'Douar Hicher', 'Mornaguia', 'Oued Ellil', 'Tébourba'] },
    { name: 'Sousse', cities: ['Sousse', 'Akouda', 'Bouficha', 'Mornaguia', 'Enfidha', 'Hammam Sousse', 'Hergla', 'Kalâa Kebira', 'Kalâa Seghira ', 'Kondar', 'Messaadine', 'Msaken', 'Sidi Bou Ali', 'Sidi El Heni', 'Sousse Jaouhara', 'Sousse Medina', 'Sousse Riadh', 'Sousse Sidi Abdelhamid'] },
    { name: 'Tunis', cities: ['Tunis', 'Carthage', 'La Goulette', 'Mornaguia', ' La Marsa', 'Sidi Bou Said'] },
    { name: 'Zaghouan', cities: ['Zaghouan', 'Bir Mcherga', ' Djebel Oust', 'El Fahs', 'Nadhour', 'Saouaf'] },
  ];
  shipping!:Shipping;
  selectedGovernorate: string = '';
  cities: string[] = [];
  updateCities() {
    const selectedGov = this.governorates.find(gov => gov.name === this.shipping.governorate);
    if (selectedGov) {
      this.cities = selectedGov.cities;
    } else {
      this.cities = [];
    }
  }
  order!:Order;
  //Get Order By Id
 getOrderById(idOrder:number){
  this.pickupService.GetOrderById(idOrder).subscribe(data=>{this.order=data});
 }

 //Get Shipping By Order
 getShippingByOrder(idOrder:number){
  this.pickupService.GetShippingByOrder(idOrder).subscribe(data=>{this.shipping=data});
 }
 user!:User;
 //Get Buyer By Order
 GetBuyerByOrder(idOrder:number){
   this.pickupService.GetBuyerByOrder(idOrder).subscribe(data=>{this.user=data});
 }
}
