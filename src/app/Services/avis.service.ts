import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Covoiturage } from '../Models/covoiturage';
import { Avis } from '../Models/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(private httpClient : HttpClient) { }
  baseUrl: string='http://localhost:8082/Avis';
  getListAvis(): Observable<Avis[]> 
  {
    return this.httpClient.get<Avis[]>(this.baseUrl +'/retreiveAvis')
      
  }
  addAvis(avis: Avis,id_cov:any): Observable<Avis> {
    
    return this.httpClient.post<Avis>(this.baseUrl +'/AddAvis'+'/'+id_cov, avis);
  }
  getAvisByCov(id_cov:any)
  {
  return this.httpClient.get<Avis[]>(this.baseUrl+'/FindByCovoiturage'+'/'+id_cov)
  }
}
