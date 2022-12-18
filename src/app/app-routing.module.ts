import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { SeriesPageComponent } from './series-page/series-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';

//generated with: ng generate module app-routing --flat --module=app
const routes: Routes = [
  { path: 'home', component: HomePageComponent , pathMatch: 'full'},
  { path: 'movies', component: MoviesPageComponent , pathMatch: 'full'},
  { path: 'series', component: SeriesPageComponent , pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'favorites', component: FavPageComponent , pathMatch: 'full'},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
