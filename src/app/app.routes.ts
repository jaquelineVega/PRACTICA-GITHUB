// Imports Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Imports Components
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent} from './pages/about/about.component';
import { from } from 'rxjs';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}