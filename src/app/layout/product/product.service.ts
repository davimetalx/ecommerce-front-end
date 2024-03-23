import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL: string = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/products`);
  }

}
