import { ProductService } from './../products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './../products/product';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct | undefined;
  errorMessage: '';

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    let param = +this.route.snapshot.paramMap.get('id');
    if(param){
      this.getProducttt(param);
    }
  }

  getProducttt(id: number): void{
    this.productService.getProduct(id).subscribe({
      next: (product) => this.product = product,
      error: (err) => this.errorMessage = err
    });
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
