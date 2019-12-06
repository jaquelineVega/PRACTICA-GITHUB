import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  productList: any[] = [];
  constructor(private products:ProductsService) { 
    this.products.getAll().subscribe((result:any)=>{
      this.productList = result;
    })
  }

  ngOnInit() {
  }

}
