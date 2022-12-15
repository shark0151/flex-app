import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FavPageComponent } from './fav-page/fav-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MediaLoaderComponent } from './media-loader/media-loader.component';
import { SeriesPageComponent } from './series-page/series-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MovieOverlayComponent } from './movie-overlay/movie-overlay.component';

//all you need to do here is import everything and add to imports field
//run these commands in terminal if on a new environment
//npm install -g @angular/cli
//yarn install
//to create a new component go to terminal and type ng generate component xyz
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    MovieDetailComponent,
    FavPageComponent,
    MoviesPageComponent,
    MediaLoaderComponent,
    SeriesPageComponent,
    LoginPageComponent,
    MovieOverlayComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule,
    ScrollingModule,
    MatTabsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
