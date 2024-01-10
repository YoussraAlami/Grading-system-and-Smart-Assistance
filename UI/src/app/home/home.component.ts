import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  
 


  
  private constructor(){

  }
  ngOnInit(): void {
   
  }
  
  right(){
    
    const btnRight: HTMLElement | null = document.getElementById("btnRight");
    const btnLeft: HTMLElement | null = document.getElementById("btnLeft");

    const h1: HTMLElement | null = document.getElementById("h1");
    const h2: HTMLElement | null = document.getElementById("h2");

    const text1: HTMLElement | null = document.getElementById("text1");
    const text2: HTMLElement | null = document.getElementById("text2");

    if(btnLeft && btnRight  && h1 &&  h2 &&  text1 && text2 ){
      btnLeft.style.display='inline';
      btnRight.style.display='none';
      h1.style.display='none';
      text1.style.display='none';

      h2.style.display="inline";
      text2.style.display="inline";
        }

    }
    

  left(){
    const btnRight: HTMLElement | null = document.getElementById("btnRight");
    const btnLeft: HTMLElement | null = document.getElementById("btnLeft");

    const h1: HTMLElement | null = document.getElementById("h1");
    const h2: HTMLElement | null = document.getElementById("h2");

    const text1: HTMLElement | null = document.getElementById("text1");
    const text2: HTMLElement | null = document.getElementById("text2");


    if(btnLeft && btnRight  && h1 &&  h2 &&  text1 && text2 ){
      btnLeft.style.display='none';
      btnRight.style.display='inline';
      h1.style.display='inline';
      text1.style.display='block';

      h2.style.display="none";
      text2.style.display="none";
        }
  
  }

 
}
