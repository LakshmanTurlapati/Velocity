import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../payment';

import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any = [];

  constructor(public ps:PaymentService) { }

  ngOnInit(): void {
    this.reloadData(); 
  }

  reloadData() {

    this.ps.findallPayments().subscribe(data => {
      this.orders = data
      console.log(this.orders);
    }
  );
  }

}
