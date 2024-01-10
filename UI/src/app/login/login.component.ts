import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/user/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  
  FormUser={
  email:'',
  password:'',
  id:''
  }
  id: any;
  hiddenDiv=false;

  users: { _id:String ,email: string, password: string ,userName:String }[]=[];


  constructor(private router:Router, private UserService:UserserviceService ){
  }

  ngOnit(){
   
  }


 reset(){
 this.FormUser.email='';
 this.FormUser.password='';
 }


  onsubmit(){
    
  if(this.FormUser.password==''){
    this.hiddenDiv=false;
    this.reset();
  }

  this.UserService.getUsers().subscribe((data:any)=> {
    this.users=data;
    console.log(this.users)
    for (let user of this.users) {
      if(user.email==this.FormUser.email && user.password==this.FormUser.password){
        this.id=user._id;
        // console.log(this.id);
        this.router.navigate(['/quiz',this.id]);
        break;
      }
      else {
        this.reset();
        setTimeout(() => {
          
          this.hiddenDiv=false;
        }, 3000);
      }
      this.hiddenDiv=true;
    }
    
   });

   this.router.navigate(['/quiz',this.id]);
 }


  
}
