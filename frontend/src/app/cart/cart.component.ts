import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;

  constructor(private cartService : CartService,private router:Router) { }

  ngOnInit(): void {

    this.cartService.getProductsList().subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  );   
  }

  reloadData() {
    this.cartService.getProductsList().subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  ); 
  }

  removeitem(id : string|any) {

    this.cartService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  gotoshop() {

    this.router.navigate(["listproducts"]);
  }
  
  gotocheck() {

    this.router.navigate(["payment"]);
  }

  getTotalCost() {
    let total = 0;
    for (var i = 0; i < this.products.length; i++) {
    this.products[i].price;
            this.grandTotal = this.products[i].price * this.products[i].Quantity;
            total = total + this.grandTotal
        }

  return total;
}

}
