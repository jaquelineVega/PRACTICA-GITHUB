// Imports Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Imports Components
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Inicio', icon: 'fa-home' } },
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}