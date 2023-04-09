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
              label: 'freelancer',
              items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/freelancer'] }
              ]
          },
          {
              label: 'Pickups',
              items: [
                  { label: 'New Pickups', icon: 'pi pi-fw pi-id-card', routerLink: ['/freelancer/pickups'] },
                  { label: 'My Pickup', icon: 'pi pi-fw pi-check-square', routerLink: ['/freelancer/myPickups'] },
                  { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] }
              ]
          },
          {
            label: 'Requests',
            items: [
                { label: 'My Requests', icon: 'pi pi-fw pi-id-card', routerLink: ['/freelancer/requests'] },
                { label: 'My Pickup', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] }
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
