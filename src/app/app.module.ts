import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TrendingItemComponent } from './components/trending-item/trending-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    ArticleItemComponent,
    TrendingComponent,
    TrendingItemComponent,
    SearchBarComponent,
    SearchResultsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
