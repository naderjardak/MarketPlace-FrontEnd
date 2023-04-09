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
                label: 'agency',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/agency'] }
                ]
            },
            {
                label: 'Pickups Management',
                items: [
                    { label: 'New Pickups', icon: 'pi pi-fw pi-id-card', routerLink: ['/agency/Pickups'] },
                    { label: 'My Pickup', icon: 'pi pi-fw pi-check-square', routerLink: ['/agency/MyPickups'] },
                    { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] }
                ]
            },
            {
              label: 'Requests Management',
              items: [
                  { label: 'My Requests', icon: 'pi pi-fw pi-id-card', routerLink: ['/agency/Requests'] },
                  { label: 'My Pickup', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                  { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] }
              ]
          },
          {
            label: 'Branch Management',
            items: [
                { label: 'Add Branch', icon: 'pi pi-fw pi-id-card', routerLink: ['/agency/addBranch'] },
                { label: 'Add Delivery Men', icon: 'pi pi-fw pi-check-square', routerLink: ['/agency/MyBranch'] },
                { label: 'My Branch', icon: 'pi pi-fw pi-bookmark', routerLink: ['/agency/BranchM'] }
            ]
        },
            {
                label: 'Utilities',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
        ];
    }
}
