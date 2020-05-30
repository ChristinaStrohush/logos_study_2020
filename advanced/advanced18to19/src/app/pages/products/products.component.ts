import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  arrProduct: Array<IProduct> = [];

  constructor(
    private prodService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.prodService.getProduct().subscribe(data => this.arrProduct = data);
  }

}
