import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {RankGouvernoratOrderData} from "../../../../Models/RankGouvernoratOrderData";
import {ServicesService} from "../services.service";
import {OrdersRankUsers} from "../../../../Models/OrdersRankUsers";
import {LayoutService} from "../../layoutB/service/app.layout.service";
import {StatusTypeStat} from "../../../../Models/StatusTypeStat";
import {Table} from "primeng/table";
import {Representative} from "../../../../Models/customer";
import {Order} from "../../../../Models/Order";

@Component({
  selector: 'app-order-stats',
  templateUrl: './order-stats.component.html',
  styleUrls: ['./order-stats.component.scss']
})
export class OrderStatsComponent implements OnInit, OnDestroy {

  @Input() options: any;

  barData: any;

  pieData: any;

  polarData: any;

  barOptions: any;

  pieOptions: any;

  statuses: any[] = [];

  status!:StatusTypeStat;

  orders!:Order[];

  loading: boolean = true;

  subscription: Subscription;

  activityValues: number[] = [0, 100];

  representatives: Representative[] = [];

  @ViewChild('filter') filter!: ElementRef;

  rankGovData!:RankGouvernoratOrderData[];
  orderRank:OrdersRankUsers[]=[];
  PDF_OrderRankForUsersByStatusType:string="http://localhost:8081/orderStats/PDF_OrderRankForUsersByStatusType";
  PDF_RankGouvernoratByOrdersNumber:string="http://localhost:8081/orderStats/PDF_RankGouvernoratByOrdersNumber";

  constructor(public layoutService: LayoutService,private service:ServicesService) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
      this.initCharts();
    });
  }

  ngOnInit() {
    this.statuses = [
      { label: 'BASKET', value: 'BASKET' },
      { label: 'WAITING_FOR_PAYMENT', value: 'WAITING_FOR_PAYMENT' },
      { label: 'ACCEPTED_PAYMENT', value: 'ACCEPTED_PAYMENT' },
      { label: 'REFUSED_PAYMENT', value: 'REFUSED_PAYMENT' }
    ];
    this.service.getBestUserOrders().subscribe(data=>{this.orders=data;
      this.orders.forEach(customer => customer.creationDate = new Date(customer.creationDate));
    this.service.orderStatsByStatusType().subscribe(data=>{this.status=data;
    this.service.rankGouvernoratByOrdersNumber().subscribe(data=>{this.rankGovData=data;
    this.service.orderRankForUsersByStatusType().subscribe(data=>{this.orderRank=data;
    this.initCharts();
    });
    });
    });
    });
  }

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.barData = {
      labels: this.orderRank.map( items => items.name),
      datasets: [
        {
          label: 'Number of Orders',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          data: this.orderRank.map( items =>  items.nb)
        }
      ]
    };

    this.barOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
      }
    };

    this.pieData = {
      labels: this.rankGovData.map(data => data.Governorat),
      datasets: [
        {
          data: this.rankGovData.map(data => data.NB),
          backgroundColor: [
            documentStyle.getPropertyValue('--indigo-500'),
            documentStyle.getPropertyValue('--purple-500'),
            documentStyle.getPropertyValue('--teal-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--indigo-400'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--teal-400')
          ]
        }
      ]
    };

    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };

  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  isExpanded: boolean = false;
  rowGroupMetadata: any;
  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.orders) {
      for (let i = 0; i < this.orders.length; i++) {
        const rowData = this.orders[i];
        const representativeName = rowData?.buyer?.firstName || '';

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.orders[i - 1];
          const previousRowGroup = previousRowData?.buyer?.firstName;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          }
          else {
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
          }
        }
      }
    }
  }


  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
