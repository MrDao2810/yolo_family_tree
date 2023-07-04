import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroduceComponent} from "./module/introduce/introduce.component";
import {FamilyTreeComponent} from "./module/family-tree/family-tree.component";
import {NewsComponent} from "./module/news/news.component";
import {ContactComponent} from "./module/contact/contact.component";
import {HomeComponent} from "./module/home/home.component";
import {DetailPostsComponent} from "./module/detail-posts/detail-posts.component";
import {CategoryNewsComponent} from "./module/category-news/category-news.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: IntroduceComponent },
  { path: 'familyTree', component: FamilyTreeComponent },
  { path: 'news/:type', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news-detail/:id', component: DetailPostsComponent},
  { path: 'category-news/:category', component: CategoryNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
