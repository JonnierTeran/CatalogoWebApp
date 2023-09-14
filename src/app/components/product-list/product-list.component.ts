import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products:ProductModel[];

  constructor(private _ProductService:ProductServiceService){
    this.products = this._ProductService.products;
  }


}
