import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
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
}
