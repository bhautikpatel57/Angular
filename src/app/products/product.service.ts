import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct } from './product';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class ProductService {
  // api url, in this case we are using json file locally
  private productUrl = 'api/products/products.json'

  constructor(private http: HttpClient ){
  };
    // get all the product for product list page
    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
                    tap((data) => console.log('All: ' + JSON.stringify(data))),
                    catchError(this.handleError)
        );
    }

    // get product for product-detail page
    getProduct(id: number): Observable<IProduct | undefined> {
      return this.getProducts().pipe(
          map( (products: IProduct[]) => products.find( (p) => p.productId === id))
        );
    }
    
    // error handler
    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
          errorMessage = `An error occurred: ${err.error.message}`;
        }else{
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}