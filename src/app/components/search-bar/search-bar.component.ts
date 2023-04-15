import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchText: string = '';
  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private router: Router) {}

  onEnter(event: any) {
    if (event.keyCode === 13) {
      console.log(this.searchText);
      this.router.navigate(['/new-page'], {
        queryParams: { searchText: this.searchText },
      });
    }
  }
}
