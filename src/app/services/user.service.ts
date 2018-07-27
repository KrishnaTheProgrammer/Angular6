import { Injectable } from '@angular/core';
import{User} from '../classes/user';
import { IfStmt } from '../../../node_modules/@angular/compiler';
// import { FORMERR } from 'dns';

@Injectable()
export class UserService {

  constructor()  {
  }
    
  public addUser(username:string, password:string):void{
    let user=new User(username, password);
    let users=this.getUsers();

    for(var i=0; i<users.length; i++){
      if(users[i].username == username){
        alert("user " + username + " already exists..");
        return;
      }
    } 
    users.push(user);
    localStorage.setItem('users',JSON.stringify({users})); 
    alert("User " + username + " added successfully..");
  }
  public getUsers(): User[] {
    let localStorageItem=JSON.parse(localStorage.getItem('users'));

    if(localStorageItem==null)
      return [];

    return localStorageItem.users;
  }

  //  private setLocalStorageUsers(Users: User[]):void{
  //    localStorage.setItem('users',JSON.stringify({Users:Users}));   
  //  }
}


