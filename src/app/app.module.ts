import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HomeWelcomeComponent } from './pages/home/home-welcome/home-welcome.component';
import { HomeMenuComponent } from './pages/home/home-menu/home-menu.component';
import { MenuListComponent } from './pages/home/menu-list/menu-list.component';
import { HomeCustomersReviewsComponent } from './pages/home/home-customers-reviews/home-customers-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeSliderComponent,
    HomeComponent,
    HomeWelcomeComponent,
    HomeMenuComponent,
    MenuListComponent,
    HomeCustomersReviewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
