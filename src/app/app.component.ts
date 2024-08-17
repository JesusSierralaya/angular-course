import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatVersionCardComponent } from './verse-card/verse-card.component';
import { CHESTER_VERSIONS } from '../assets/db-data';
import { CatVersions } from './interfaces/cat-versions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatVersionCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = {
    title: 'Change the title',
  };

  defaultNumber = 100;

  defaultName = 'Chester';

  onLogoClicked() {
    alert('Hello Chester');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  returnNumber(newNumber: number) {
    this.defaultNumber = newNumber;
  }

  returnName(newName: string) {
    this.defaultName = newName;
  }

  // Chester versions for cards

  // chesterVersions = CHESTER_VERSIONS
  // chesterVersions: CatVersions[] = [] 
  chesterVersions: CatVersions[] = [...CHESTER_VERSIONS]

  onVersionSelected(version: CatVersions) {
    console.log('App component - click event ', version);
  }
}
