import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BannerComponent} from "./banner/banner.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { MatIconModule } from '@angular/material/icon';
import {CarouselComponent} from "./carousel/carousel.component";
import {CarouselCardComponent} from "./carousel-card/carousel-card.component";
import {RecentPostsComponent} from "./carousel-post/carousel-recent-posts.component";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    CarouselComponent,
    CarouselCardComponent,
    RecentPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
