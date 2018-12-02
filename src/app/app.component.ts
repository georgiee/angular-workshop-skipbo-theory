import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-theory';

  toggle() {
    if (this.title !== 'workshop-theory 😎') {
      this.title = 'workshop-theory 😎';
    } else {
      this.title = 'workshop-theory 🤩';
    }
  }
}
