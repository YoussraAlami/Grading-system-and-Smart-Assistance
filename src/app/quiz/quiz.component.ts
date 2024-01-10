import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
QuizDiv=false;
OtherDiv=true;



start(){
  this.QuizDiv=true;
  this. OtherDiv=false;
}
}
