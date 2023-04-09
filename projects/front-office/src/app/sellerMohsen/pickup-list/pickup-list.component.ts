import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pickup } from 'Models/Pickup';
import { PickupService } from '../servicesM/pickup.service';
import 'jspdf-autotable';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { map } from 'rxjs';


@Component({
  selector: 'app-pickup-list',
  templateUrl: './pickup-list.component.html',
  styleUrls: ['./pickup-list.component.scss']
})
export class PickupListComponent {
  constructor(private pickupService:PickupService,private http:HttpClient,private route:Router){}
  ngOnInit() {
    this.getPickupData();
  }

  getPickupData() {
    this.pickupService.GetPickupBySellerWaiting()
      .subscribe((data: Pickup[]) => {
        this.pickup = data;
        this.totalItems = data.length;
      });
  }

  onPageChange(event: any): void {
    this.p = event;
    this.getPickupData();
  }
  pickup!:Pickup[];
  totalItems = 0;
  p = 1; // current page number
  itemsPerPage = 2; // number of items to display per page

  DeletePickup(idPickup: number) {
    // Call the pickup service to delete the pickup
    this.pickupService.DeletePickup(idPickup)
      .subscribe(() => {
        // Call the method to refresh the table data
        this.getPickupData();
        // Show a notification to indicate the pickup was deleted successfully
      }

      );
  }
  generatePDF1() {
    const doc = new jsPDF.default();
    const tableRows = [];
    const startY = 50;
    const pageWidth = doc.internal.pageSize.width;

    // Define custom styles for the table
    const styles = {
      header: {
        fontSize: 16,
        bold: true,
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        padding: 8
      },
      cell: {
        padding: 4,
        fontSize: 12,
        textColor: [0, 0, 0],
        fillColor: [255, 255, 255],
        lineWidth: 0.1,
        lineColor: [0, 0, 0]
      }
    };

    // Add table headers
    const headers = ['Tracking Id', 'Sum', 'Governorate - City', 'Requests', 'Status', 'Creation Date'];
    tableRows.push(headers);

    // Add table rows
    this.pickup.forEach((p) => {
      const row = [
        p.codePickup,
        p.sum,
        `${p.governorate}-${p.city}`,
        p.nbRequest,
        p.statusPickupSeller,
        p.dateCreationPickup
      ];
      tableRows.push(row);
    });

    // Draw the table
    (doc as any).autoTable({
      head: [tableRows[0]],
      body: tableRows.slice(1),
      startY,
      styles,
      theme: 'grid',
      margin: { top: 30 },
      tableWidth: 'auto',
      columnWidth: 'auto',
      showHead: 'everyPage',
      pageBreak: 'auto'
    });

    // Add custom content to the PDF
    doc.setFontSize(24);
    doc.text('Pickup Report', pageWidth / 2, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Total number of pickups: ${this.pickup.length}`, 14, 30);

    // Save the PDF
    doc.save('mypdf.pdf');

  }
  generatePDF() {
    const doc = new jsPDF.default();
    const tableRows = [];

    // Define the pickup PDF layout
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    const margin = 10;
    const lineHeight = 7;

    // Draw the pickup information
    doc.setFontSize(12);

    doc.text('PICKUP SLIP', margin, margin + lineHeight);

    doc.setFontSize(10);

    this.pickup.forEach((p) => {
      doc.text(`Store Name: ${p.store.name} ${p.order.buyer.lastName}`, margin, margin + lineHeight * 8);
      doc.text(`Store phone number: ${p.store.seller.phoneNumber}`, margin, margin + lineHeight * 9);
      doc.text(`Code: ${p.codePickup}`, margin, margin + lineHeight * 2);
      doc.text(`Date: ${p.dateCreationPickup}`, margin, margin + lineHeight * 3);
      doc.text(`Recipient: ${p.order.buyer.firstName} ${p.order.buyer.lastName}`, margin, margin + lineHeight * 4);
      doc.text(`Recipient phone number: ${p.order.buyer.phoneNumber}`, margin, margin + lineHeight * 5);
      doc.text(`Address: ${p.governorate}`, margin, margin + lineHeight * 6);
      doc.text(`City/State/Zip: ${p.city}, ${p.availableDeliver} `, margin, margin + lineHeight * 7);
      doc.setFontSize(10);
    });

    // Draw the pickup label
    doc.setFillColor(204, 204, 204);
    doc.rect(width - margin - 70, margin, 70, 70, 'F');
    doc.setFontSize(16);

    doc.text('PICKUP', width - margin - 60, margin + 25);
    doc.text('SLIP', width - margin - 60, margin + 40);

    // Save the PDF
    doc.save('mypdf.pdf');
  }
  generatePDF3() {
    this.pickup.forEach((p) => {
      const doc = new jsPDF.default();
      const tableRows = [];

      // Define the pickup PDF layout
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      const margin = 10;
      const lineHeight = 7;

      // Draw the pickup information
      doc.setFontSize(12);

      doc.text('PICKUP SLIP', margin, margin + lineHeight);

      doc.setFontSize(10);

      const pickup = [
        doc.text(`Code: ${p.codePickup}`, margin, margin + lineHeight * 2),
        doc.text(`Date: ${p.dateCreationPickup}`, margin, margin + lineHeight * 3),
        doc.text(`Recipient: ${p.order.buyer.firstName}`, margin, margin + lineHeight * 4),
        doc.text(`Address: ${p.governorate}`, margin, margin + lineHeight * 5),
        doc.text(`City/State/Zip: ${p.city}, ${p.availableDeliver}`, margin, margin + lineHeight * 6)
      ];

      // Draw the pickup label
      doc.setFillColor(204, 204, 204);
      doc.rect(width - margin - 70, margin, 70, 70, 'F');
      doc.setFontSize(16);

      doc.text('PICKUP', width - margin - 60, margin + 25);
      doc.text('SLIP', width - margin - 60, margin + 40);

      // Save the PDF
      doc.save(`mypdf_${p.codePickup}.pdf`);
    });
  }
}


