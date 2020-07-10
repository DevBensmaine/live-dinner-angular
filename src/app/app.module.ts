import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HomeWelcomeComponent } from './pages/home/home-welcome/home-welcome.component';
import { HomeMenuComponent } from './pages/home/home-menu/home-menu.component';
import { MenuListComponent } from './pages/home/menu-list/menu-list.component';
import { HomeCustomersReviewsComponent } from './pages/home/home-customers-reviews/home-customers-reviews.component';
import { AboutComponent } from './pages/About/about/about.component';
import { AboutHeaderComponent } from './pages/About/about-header/about-header.component';
import { AboutContentComponent } from './pages/About/about-content/about-content.component';


const routes: Routes = [
  { path:'' , component:HomeComponent },
  { path:'about' , component:AboutComponent },
  { path: '**',   redirectTo: '/', pathMatch: 'full' },
];

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
    HomeCustomersReviewsComponent,
    AboutComponent,
    AboutHeaderComponent,
    AboutContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
