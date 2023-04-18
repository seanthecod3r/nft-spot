import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RandomImageService {
  constructor(private http: HttpClient) {}

  getRandomImage() {
    return this.http.get('https://picsum.photos/200/300', {
      responseType: 'blob',
    });
  }
}
