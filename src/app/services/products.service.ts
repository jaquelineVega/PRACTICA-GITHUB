import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsModel } from '../models/models';
import { Observable } from 'rxjs';

const URL_PRODUCTS = 'assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 

  }

  getAll() {
    return this.http.get(URL_PRODUCTS);
  }

  getByCategory(category: string){
    return new Observable(observer => {
      this.getAll().subscribe((data:ProductsModel[]) => {
        const filter = data.filter(item => item.categoria == category || item.categoria.indexOf(category) >= 0);
        observer.next(filter);
      });
    });
  }

  getByCode(code: string){
    return new Observable(observer => {
      this.getAll().subscribe((data:ProductsModel[]) => {
        const filter = data.filter(item => item.codigo == code);
        observer.next(filter[0]);
      });
    });
  }


}
