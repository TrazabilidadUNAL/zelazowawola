import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProducersComponent } from './producers/producers.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AccountComponent } from './account/account.component';
import { PlaceComponent } from './place/place.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'producers', component: ProducersComponent },
  { path: 'warehouse', component: WarehouseComponent },
  { path: 'account', component: AccountComponent },
  { path: 'place', component: PlaceComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
