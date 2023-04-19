import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/shared/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  articles: Article[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http
      .get<Article[]>('http://localhost:3000/Articles')
      .subscribe((articles) => {
        console.log(articles);
        this.articles = articles;
      });
  }
}
