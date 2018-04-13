import { NgModule } from '@angular/core';
import { ProductListComponent } from './productList.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { MapComponent } from '../map/map.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard-service';
import { ProductService } from './product.service';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbccW8Gsb3JO42nsZZfaAUJceseb7H8VY'
    }),
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    MapComponent
  ],

  providers: [
    ProductGuardService,
  ProductService],
})
export class ProductModule { }
