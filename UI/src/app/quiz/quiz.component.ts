import { Component , Renderer2, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { QuestionsserviceService } from 'src/app/services/question/questionsservice.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})


export class QuizComponent {
QuizDiv=false;
OtherDiv=true;
questions:any;
currentQuestionIndex = 0;
Result=false;
boutonDesactive=true;
inputValeur: String = '';
Responses:String[]=[];
ids: string[] = [];
Results=[];
  
constructor(private QuestionsserviceService:QuestionsserviceService,private http: HttpClient) {
}

ngOnInit(): void {
   
  this.getQuestions();

 }

 getQuestions(){
  this.QuestionsserviceService.getquestions().subscribe((data:any)=> {
   this.questions=data;
  
   data.forEach((datax: { id_question: any; }) => this.ids.push(datax.id_question));
  //  console.log(this.ids);

  });
}

start(){
  this.QuizDiv=true;
  this. OtherDiv=false;
}


  showNextQuestion() {   
    if (this.currentQuestionIndex < this.questions.length - 1) {
      
      this.currentQuestionIndex++;
      let index=this.currentQuestionIndex-1;
      this.Responses[index]=this.inputValeur;
      this.inputValeur=this.Responses[index+1];
     // console.log(this.inputValeur);
    
  
      if(this.currentQuestionIndex==9){
       this.boutonDesactive=false;
       
      }
    }
  }


  showPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      let index=this.currentQuestionIndex ;
      this.Responses[index +1]=this.inputValeur;
      this.inputValeur=this.Responses[index];
      
    }
  }


  submit(){
    this.Responses[9]=this.inputValeur;
    this.QuizDiv=false;
    this.Result=true;

    this.Responses.forEach((response, index) => {
      this.Responses[index] = response ?? "";
    });

   // console.log(this.Responses);
   // console.log(this.ids);

   const data = {
    Responses: this.Responses,
    ids: this.ids
   };

  this.http.post<any>('http://localhost:5000/lists', data)
    .subscribe(response => {
      console.log(response);
    });

    
  }



  CalculSomme(Results:any){
    let Somme = 0;

    for (let Result of Results) {
      Somme += Result;
    }
  
    return Somme;
  }
}
