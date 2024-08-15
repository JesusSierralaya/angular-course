import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  title: string | undefined

  @Input()
  img: string | undefined

  @Input()
  description: string | undefined

  constructor(){}
}
