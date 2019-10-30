import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'PS4',
      expanded: true,
      products: [
        { id: 0, name: 'Spider-Man', price: '500000', imageUrl: '/assets/spider.png' },
        { id: 1, name: 'OverWatch', price: '250000', imageUrl: '/assets/overwatch.png' },
        { id: 2, name: 'Call Of Dutty', price: '300000', imageUrl: '/assets/cod.png' },
        { id: 3, name: 'Devil My Cry', price: '500000', imageUrl: '/assets/devil.png'},
      ]
    },
    {
      category: 'Sega',
      products: [
        { id: 4, name: 'Android Assault', price: '150000', imageUrl: '/assets/Assault.png' },
        { id: 5, name: 'Heart', price: '200000', imageUrl: '/assets/Heart.png' },
      ]
    },
    {
      category: 'Nintendo',
      products: [
        { id: 6, name: 'Diablo', price: '325000', imageUrl: '/assets/diablo.png'  },
        { id: 7, name: 'DiamonXMachina', price: '220000', imageUrl: '/assets/dxm.png'  },
        { id: 8, name: 'Yooka Laylee', price: '410000', imageUrl: '/assets/yooka.png'  },
      ]
    }
  ];
 
  private cart = [];
 
  constructor(private http: HttpClient) { }

  getLocalData(){
    return
  }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
  
  deleteFromCart(product) {
	this.cart.splice(product, 1);
  }
  
}