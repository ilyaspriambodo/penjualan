import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router, private cartService: CartService) {}

  pop(){
	  this.router.navigate(['/tabs/tab3']);
  }

  selectedItems = [];
 
  total = 0;
 
  ngOnInit() {
    
	let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
	}
	
	onDeleteItem(item) {
	const index = this.selectedItems.indexOf(item);
	if (index > -1) {
		this.cartService.deleteFromCart(index);
		this.selectedItems.splice(index, 1);
	console.log(this.selectedItems);
	}
	this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }
}