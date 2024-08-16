import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatVersions } from '../interfaces/cat-versions';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input()
  version: CatVersions | undefined

  @Output()
  versionSelected = new EventEmitter<CatVersions>()

  constructor(){}

  onVersionViewed() {
    console.log('Clicked from course-card...');

    this.versionSelected.emit(this.version)
    
  }
}
