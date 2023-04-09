import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Seller'] }
                ]
            },
            {
              label: 'Delivery Management',
              items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-id-card', routerLink: ['/Seller/DashboardDelivery'] },
                  { label: 'add Pickup', icon: 'pi pi-fw pi-check-square', routerLink: ['/Seller/stores'] },
                  { label: 'Pickups Waiting', icon: 'pi pi-fw pi-bookmark', routerLink: ['/Seller/pickups'] },
                  { label: 'Pickups In Progress', icon: 'pi pi-fw pi-check-square', routerLink: ['/Seller/pickupsInProgress'] },
              ]
          },
          {
            label: 'History delivery Management',
            items: [
                { label: 'All Pickups', icon: 'pi pi-fw pi-id-card', routerLink: ['/c/DashboardDelivery'] },
                { label: 'Statistical', icon: 'pi pi-fw pi-id-card', routerLink: ['/c/DashboardDelivery'] }

            ]
        },
        ];
    }
}
