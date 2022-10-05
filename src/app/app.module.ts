import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FavPageComponent } from './fav-page/fav-page.component';


//all you need to do here is import everything and add to imports field
//to create a new component go to terminal and type ng generate component xyz
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    MovieDetailComponent,
    FavPageComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
