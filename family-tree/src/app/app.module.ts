import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./module/header/header.component";
import {HomeComponent} from "./module/home/home.component";
import {FooterComponent} from "./module/footer/footer.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BannerComponent} from "./module/banner/banner.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { MatIconModule } from '@angular/material/icon';
import {CarouselComponent} from "./module/carousel/carousel.component";
import {CarouselCardComponent} from "./module/carousel-card/carousel-card.component";
import {RecentPostsComponent} from "./module/carousel-post/carousel-recent-posts.component";
import {IntroduceComponent} from "./module/introduce/introduce.component";
import {RouterModule} from "@angular/router";
import {FamilyTreeComponent} from "./module/family-tree/family-tree.component";
import {NewsComponent} from "./module/news/news.component";
import {ContactComponent} from "./module/contact/contact.component";
import {DetailPostsComponent} from "./module/detail-posts/detail-posts.component";
import {CategoryNewsComponent} from "./module/category-news/category-news.component";
import { FormsModule } from '@angular/forms';
import { TableViewComponent } from './table-view/table-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
    RecentPostsComponent,
    IntroduceComponent,
    FamilyTreeComponent,
    NewsComponent,
    ContactComponent,
    DetailPostsComponent,
    CategoryNewsComponent,
    TableViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
