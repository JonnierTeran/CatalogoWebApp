import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public products:ProductModel[];

  constructor() { 
    this.products= [new ProductModel('Fruticas', 100),
    new ProductModel('Soneto', 100),
    new ProductModel('Menta Ice', 100),
    new ProductModel('Coffe Ligth', 100 ),
    new ProductModel('Mist', 100),
    new ProductModel('Chiclets Adams', 200),
    new ProductModel('Splot', 100 ),
    new ProductModel('Chupones', 300 ),
    new ProductModel('Chupetas', 200 ),
    new ProductModel('BomBon Bum', 300 ),
    new ProductModel('Rulas Grandes', 800 ),
    new ProductModel('Almuerzito', 300 ),
    new ProductModel('Rulitas',  300),
    new ProductModel('Kikito Pequeño', 400),
    new ProductModel('Kikito Grande', 800),
    new ProductModel('Festival Grande', 1200 ),
    new ProductModel('Trocillos', 300 ),
    new ProductModel('Rosquitas', 1000 ),
    new ProductModel('Bolitas de Queso', 300 ),
    new ProductModel('Tocinetas ', 800 ),
    new ProductModel('Nucita Caliente', 700 ),
    new ProductModel('Galleta Nucita', 700 ),
    new ProductModel('Choco Boll', 200 )]
  }
}
