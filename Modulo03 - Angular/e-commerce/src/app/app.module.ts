import { HttpClientModule } from '@angular/common/http';
import { ListProductService } from './service/list-product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { TechstoreAppComponent } from './components/techstore-app/techstore-app.component';
import { FiltersComponent } from './components/techstore-app/filters/filters.component';
import { ProductListComponent } from './components/techstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/techstore-app/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TechstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ListProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
