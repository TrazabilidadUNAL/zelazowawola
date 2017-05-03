import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProducerComponent } from './producer/producer.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AccountComponent } from './account/account.component';
import { PlaceComponent } from './place/place.component';
import { ProductComponent } from './product/product.component';
import { MobileComponent } from './mobile/mobile.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PdashboardComponent } from './pdashboard/pdashboard.component';
import { WdashboardComponent } from './wdashboard/wdashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProducerComponent,
    WarehouseComponent,
    AccountComponent,
    PlaceComponent,
    ProductComponent,
    MobileComponent,
    PdashboardComponent,
    WdashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCC4lO1PjOC9xzRaOK86FJoht6VBFYcsB8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
