import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { catchError, map, tap} from 'rxjs/operators';
import { ObservableInput } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
    private _productUrl = 'http://localhost:5000/api/product';
    private headers = new HttpHeaders();
    constructor(private _http: HttpClient) {
           }
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All data = >' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProductsByName(value: string): Observable<IProduct[]> {
        // const params = new HttpParams() {
        //    name =  value
        // };
        return this._http.post<IProduct[]>(this._productUrl + '/GetProductByName/', value, { headers: this.headers })
        .do(data => console.log('All data = >' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProductsById(value: number): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl + '/GetProduct/' + value, { headers: this.headers })
        .do(data => console.log('All data = >' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
