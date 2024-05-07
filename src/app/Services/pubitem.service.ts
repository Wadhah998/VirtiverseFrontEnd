import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PubItem } from '../Models/pubitem';

@Injectable({
  providedIn: 'root'
})
export class PubitemService {
  private baseUrl : String ="http://localhost:8082/pubitem/";
  private staticUserId = 1;
  static staticUserId: number = 1;
  constructor(private httpClient : HttpClient) { }

  getPubitems(): Observable<PubItem[]> 
  {
    return this.httpClient.get<PubItem[]>(this.baseUrl +'retrieveAllPub')
  }


  deletePubitem(id: number): Observable<void> {
    const url = `${this.baseUrl}removePub/${id}`;
    return this.httpClient.delete<void>(url);
  }

  updatePubItem(pubItem: PubItem): Observable<PubItem> {
    return this.httpClient.post<PubItem>(`${this.baseUrl}updatePub`, pubItem);
  }

  searchPubItems(keyword: string): Observable<PubItem[]> {
      return this.httpClient.get<PubItem[]>(`${this.baseUrl}searchPubItems?keyword=${keyword}`);
    }


    addPubItemm(pubItem: PubItem): Observable<PubItem> {
      return this.httpClient.post<PubItem>(`${this.baseUrl}addPubItemm`, pubItem, {
        params: { id: this.staticUserId.toString() }
      });
    }

  addPubItem(formData: FormData) {
    return this.httpClient.post<any>(`${this.baseUrl}addPub`, formData);
  }
    

    getPubItemById(id: number): Observable<PubItem> {
      const url = `${this.baseUrl}${id}`;
      return this.httpClient.get<PubItem>(url);
    }



    getPubItemsByCurrentUser(): Observable<PubItem[]> {
      // Use the static user ID in the HTTP request
      return this.httpClient.get<PubItem[]>(`${this.baseUrl}user/${PubitemService.staticUserId}`);
    }

    getPubItemsSortedByPriceDS(): Observable<PubItem[]> {
      return this.httpClient.get<PubItem[]>(`${this.baseUrl}sorted-by-priceds`);
    }

    getPubItemsSortedByPriceAS(): Observable<PubItem[]> {
      return this.httpClient.get<PubItem[]>(`${this.baseUrl}sorted-by-priceas`);
    }


    getItemsSortedByEtat(etat: string): Observable<PubItem[]> {
      const url = `${this.baseUrl}itemsbyetat?etat=${etat}`;
      return this.httpClient.get<PubItem[]>(url);
    }

    filterByPriceRange(minPrice: number, maxPrice: number): Observable<PubItem[]> {
      const url = `${this.baseUrl}filterByPrice?minPrice=${minPrice}&maxPrice=${maxPrice}`;
      return this.httpClient.get<PubItem[]>(url);
    }


    getPubItemsByPrice(price: number): Observable<PubItem[]> {
      return this.httpClient.get<PubItem[]>(`${this.baseUrl}byPrice/${price}`);
    }
}
