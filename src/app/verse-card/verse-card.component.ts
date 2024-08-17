import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatVersions } from '../interfaces/cat-versions';

@Component({
  selector: 'app-verse-card',
  standalone: true,
  imports: [],
  templateUrl: './verse-card.component.html',
  styleUrl: './verse-card.component.css'
})
export class CatVersionCardComponent {

  @Input()
  version: CatVersions | undefined

  @Input()
  index: number | undefined

  @Output()
  versionSelected = new EventEmitter<CatVersions>()

  constructor(){}

  onVersionViewed() {
    console.log('Clicked from course-card...');

    this.versionSelected.emit(this.version)
    
  }
}
