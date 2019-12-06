// Imports Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Imports Components
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent} from './pages/about/about.component';
import { from } from 'rxjs';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Inicio', icon: 'fa-home' } },
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent, data: { title: 'Acerca de', icon: 'fas fa-building' } },
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent },
    { path: 'about', component: AboutComponent, data: { title: 'Acerca de', icon: 'fas fa-building' } },
    { path: 'product/:code/:category', component: ProductComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}