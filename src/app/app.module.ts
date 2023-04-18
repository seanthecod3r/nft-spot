import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TrendingItemComponent } from './components/trending-item/trending-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { NftsComponent } from './components/nfts/nfts.component';
import { NftItemComponent } from './components/nft-item/nft-item.component';
import { HomepageContentComponent } from './components/homepage-content/homepage-content.component';

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
    NftsComponent,
    NftItemComponent,
    HomepageContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
