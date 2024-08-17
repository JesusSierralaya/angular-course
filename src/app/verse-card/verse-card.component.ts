import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { CatVersions } from '../interfaces/cat-versions';

@Component({
  selector: 'app-verse-card',
  standalone: true,
  imports: [NgClass],
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

  cardClasses(){
    return {
      'ancient': this.version?.type == 'ancient',
      'futuristic': this.version?.type == 'futuristic',
      'modern': this.version?.type == 'modern'
    }
  }
}
