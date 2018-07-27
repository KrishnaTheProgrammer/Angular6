import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  isDisabled = false;

    disableButton = function() {
      this.isDisabled = true;
    }

}

