import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
})
export class ArticleItemComponent {
  @Input() article: Article;
}
