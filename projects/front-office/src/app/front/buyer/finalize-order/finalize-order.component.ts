import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Shipping} from "../../../../../../../Models/Shipping";
import {CustemerModel} from "../../../../../../../Models/CustemerModel";

@Component({
  selector: 'app-finalize-order',
  templateUrl: './finalize-order.component.html',
  styleUrls: ['./finalize-order.component.css']
})
export class FinalizeOrderComponent {


  constructor(private router: Router, private home: HomeService, private snackBar: MatSnackBar,private renderer: Renderer2, private el: ElementRef) {
  }

  ch:boolean=false;
  checkedFn()
  {
    this.ch = !this.ch;
  }

  msg:string='Confirmation Email is Sent';

  requestOrder!: Order;
  request!: ProductQuantity[];
  shipping!: Shipping[];
  form:any={};
  retShipping!:Shipping;

  ngOnInit() {
    this.getListProduct();
    this.getBaskerOrder();
    this.getAllUserShippings();
    this.invokeStripe();
    this.cutemer.customerId = '35144';
    this.cutemer.email = this.requestOrder.buyer.email;
    this.cutemer.name = this.requestOrder.buyer.firstName+' '+this.requestOrder.buyer.lastName;

  }


  gotoHome()
  {
    this.router.navigate(["/buyer"]);
  }

  @ViewChild('alert') alert: ElementRef | undefined;

  showSuccessAlert(): void {
    if (this.alert) {
      this.alert.nativeElement.classList.add('alert-show');
      setTimeout(() => {
        if (this.alert) {
          this.alert.nativeElement.classList.remove('alert-show');
        }
      }, 2000);
    }
  }



  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }


  getListProduct() {
    this.home.loadPosts().subscribe(data => {
      this.request = data;
    });
  }


  getBaskerOrder() {
    this.home.loadOrder().subscribe(data => {
      this.requestOrder = data
    })
  }

  getAllUserShippings() {
    this.home.getAllUserShippings().subscribe(data => {
      this.shipping = data;
    })
  }

  onShippingSelected(s:number) {
    this.home.addShippingToOrder(s).subscribe(data =>{this.requestOrder=data;});
  }
  addForm() {
    for (let i = 0; i < this.city.length; i++) {
      if (this.city[i].cities.includes(this.form.city)) {
        this.form.governorate = this.city[i].name;
      }
    }
    this.home.createNewShipping(this.form).subscribe(data =>{
      this.retShipping=data;
      this.home.addShippingToOrder(this.retShipping.id).subscribe(data =>{this.requestOrder=data});
      this.getAllUserShippings();
    });
  }

  deleteShipping(id:number)
  {
    this.home.deleteShippingAdresse(id).subscribe(data=>{this.getAllUserShippings()})
  }


  city = [
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
    { name: 'Zaghouan', cities: ['Zaghouan', 'Bir Mcherga', ' Djebel Oust', 'El Fahs', 'Nadhour', 'Saouaf'] }
  ]

  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51Mfn40EtrOAhVreOQtPfLVpTGPlokQ6fmWwvgPdpMEaMRReAKYUsjeLfncl5g7NbQpsQF96ieCPrMMMaUUH3p2vk00wfyW3GKf';
  cutemer: CustemerModel = new CustemerModel(); // Instantiate the CustemerModel




  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: (stripeToken: any) => {
        this.cutemer.cardToken = stripeToken.id;

        console.log(stripeToken);
        this.cutemer.paidAmount = amount* 100;
        // Call the payementsStripe method after the Stripe token is generated
        this.home.payementsStripe(this.cutemer).subscribe(data => {console.log(data);this.msg='Payement Succeeded';this.showSuccessAlert()},
          error => {
            console.log(error);
            this.msg = 'Payment Failed';
          });


      },
    });
    paymentHandler.open({
      name: 'Bank Card Payement',
      description: 'Make sur to fill with correct coordination',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: (stripeToken: any) => {
            console.log(stripeToken);
            this.msg='Payement Succeeded';
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

  pay:string='cash';

  onChangePayement(s:string)
  {
    this.pay=s;
    if (s=='cash')
    this.msg='Confirmation Email is Sent'
    else
      this.msg='Payement Succeeded';
  }
  endPaimentProcess()
  {
    this.home.endPaimentProcess().subscribe(data=>{});
  }

}
