import { Component, Input } from '@angular/core';
import { NFT } from 'src/app/shared/models/nft';
import { RandomImageService } from 'src/app/shared/services/random-image';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nft-item',
  templateUrl: './nft-item.component.html',
  styleUrls: ['./nft-item.component.css'],
})
export class NftItemComponent {
  @Input() nft: NFT;
  imageUrl: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRandomImage();
  }

  /* Look into a good way to display the NFTs with their information. Possibly show just the images,
     and when someone hovers over the NFT image, show name and description and any other required
    information */

  getRandomImage() {
    this.http
      .get('https://picsum.photos/200', { responseType: 'blob' })
      .subscribe((response) => {
        const reader = new FileReader();
        reader.readAsDataURL(response);
        reader.onloadend = () => {
          const base64data = reader.result;
          this.imageUrl = base64data;
        };
      });
  }
}
