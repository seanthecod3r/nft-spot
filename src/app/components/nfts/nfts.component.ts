import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NFT } from 'src/app/shared/models/nft';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css'],
})
export class NftsComponent {
  @Input() imagesPerRow: number;
  nfts: NFT[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http
      .get<NFT[]>('http://localhost:3000/NFTs')
      .subscribe((nfts) => {
        console.log(nfts);
        this.nfts = nfts;
      });
  }
}
