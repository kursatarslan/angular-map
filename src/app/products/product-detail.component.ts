import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  public pageTitle: string = 'Product Detail';
  public product: IProduct;
  constructor(private _route: ActivatedRoute, private _router: Router) {
    // console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += ' ' + id;
    this.product = {
      id: id,
      name: 'asdasd',
      code: 'dd',
      releaseDate: 'dd',
      description: 'dd',
      price: 34.4,
      starRating: 3.3,
      imageUrl: ''
    };
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
