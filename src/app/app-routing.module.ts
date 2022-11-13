import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';


//generated with: ng generate module app-routing --flat --module=app
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'movies', component: MoviesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
