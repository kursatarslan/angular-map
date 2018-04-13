import {Component, Inject, OnInit, OnChanges, SimpleChange} from '@angular/core';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './productList.component.html',
    styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit {
    public products: IProduct[];
    public filteredProducts: IProduct[];
    public pageTitle: string = 'Product List';
    public imageWidth: number = 50;
    public imageMargin: number = 20;
    public showImage: boolean = false;
    public _listFilter: string;
    public errorMessage: string;

    constructor(private _productService: ProductService) {
        this._listFilter = 'cart';
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        }, error => this.errorMessage = <any>error);
    }

    onNotify(message: string) {
        this.pageTitle = message;
    }
    performFilter(filterBy: string): IProduct[] {
        // filterBy = filterBy.toLowerCase();
        // return this._productService.getProductsByName(filterBy)
        // .(products => {
        //     this.products = products;
        //     this.filteredProducts = this.products
        //     return this.filteredProducts;
        // }, error => this.errorMessage = <any>error);
         return this.products.filter((product: IProduct) =>
            product.name.toLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
