import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insurancemodel } from './insurancemodel';
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  apiUrl = 'http://localhost:27129/';  
  constructor(private http: HttpClient) { }  
  calculatePremium(insurance: Insurancemodel): Observable<Insurancemodel> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'PremiumCalculator', insurance, httpOptions);
  }  
}
