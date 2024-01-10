import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsserviceService {

  url ='http://localhost:4001/question'

  constructor(private HttpClient:HttpClient) { }

   getquestions(){
    return this.HttpClient.get(this.url);
   }

   viewquestion(id:any){
     let urlID =this.url +id;
     return this.HttpClient.get(urlID);
   }


   addquestion(question:any){
    
    return this.HttpClient.post(this.url,question);
   }

   deletequestion(id:any){
    let urlID =this.url+id;
    return this.HttpClient.delete(urlID);
   }

   updatequestion(id:any ,question:any){
    let urlID =this.url+id;
    return this.HttpClient.patch(urlID,question);
   }
  
}






