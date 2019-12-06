import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { CardComponent } from './Components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
