import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProducerComponent } from './producer/producer.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AccountComponent } from './account/account.component';
import { PlaceComponent } from './place/place.component';
import { ProductComponent } from './product/product.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'producer', component: ProducerComponent },
  { path: 'warehouse', component: WarehouseComponent },
  { path: 'account', component: AccountComponent },
  { path: 'place', component: PlaceComponent },
  { path: 'product', component: ProductComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
