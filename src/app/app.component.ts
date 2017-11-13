import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  showProgress: boolean = false;

  showAnswer() {
   // this.showSpinner = true;
    this.showProgress = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
      this.showProgress = false;
    }, 5000);
  }

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;

}
