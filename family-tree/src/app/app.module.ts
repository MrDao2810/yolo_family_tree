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
import {TestComponent} from "./test/test.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
