import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from '../map/map.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './productList.component';
import { ProductGuardService } from './product-guard-service';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
            { path: 'map', component: MapComponent },
          ]),
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule {}

