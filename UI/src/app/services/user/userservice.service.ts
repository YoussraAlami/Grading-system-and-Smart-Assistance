import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url ='http://localhost:4001/user'

  constructor(private HttpClient:HttpClient) { }

   getUsers(){
    return this.HttpClient.get(this.url);
   }

   viewUser(id:any){
     let urlID =this.url +id;
     return this.HttpClient.get(urlID);
   }

   viewUserEmail(email:any){
    
    return this.HttpClient.get('http://localhost:3000/users/email/${email}');
  }

   addUser(user:any){
    
    return this.HttpClient.post(this.url,user);
   }

   deleteUser(id:any){
    let urlID =this.url+id;
    return this.HttpClient.delete(urlID);
   }

   updateUser(id:any ,User:any){
    let urlID =this.url+id;
    return this.HttpClient.patch(urlID,User);
   }
  

}




