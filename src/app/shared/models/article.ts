enum ArticleType {
  NEWS = 'news',
  ART = 'art',
  COLLECTIBLES = 'collectibles',
  GAMING = 'gaming',
  TECHNOLOGY = 'technology',
}

export interface Article {
  id: number;
  type: ArticleType;
  title: string;
  description: string;
  author: string;
}
