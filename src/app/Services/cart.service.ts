import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../Models/cart';
import { PubItem } from '../Models/pubitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl : String ="http://localhost:8082/cart/";
  constructor(private httpClient : HttpClient) { }


  
  getCartById(cartId: number): Observable<Cart> {
    return this.httpClient.get<Cart>(`${this.baseUrl}${cartId}`);
  }

  getProductsInCart(cartId: number): Observable<PubItem[]> {
    return this.httpClient.get<PubItem[]>(`${this.baseUrl}${cartId}/items`);
  }
 
  getAllCartsWithProducts(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`${this.baseUrl}allcart`);
  }

  deleteCart(cartId: number): Observable<string> {
    const url = `${this.baseUrl}${cartId}`;
    return this.httpClient.delete<string>(url);
  }
}
