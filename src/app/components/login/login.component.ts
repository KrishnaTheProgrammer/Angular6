import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username:string;
  private password:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.userService.getUsers();
    }
  }

  login(){
    var users = this.userService.getUsers();
    for(var i=0; i<users.length; i++){
      if(users[i].username == this.username && users[i].password == this.password){
        //alert("s");
        location.replace("/dashboard");
        return;
      }
    } 
    alert("F");
  }

}
