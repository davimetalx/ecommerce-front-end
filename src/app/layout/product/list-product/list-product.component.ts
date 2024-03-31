import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit, OnDestroy {

  subscription?: Subscription;

  dataSource: Product[] = [];

  displayedColumns: string[] = ['name', 'description', 'price'];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.subscription = this.productService.getProducts()
    .subscribe(products => {
      this.dataSource = products;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
