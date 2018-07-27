import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private username:string;
  private password:string;
  
  
  constructor(private userService:UserService ) {

   }

  ngOnInit() {
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.userService.addUser(this.username, this.password);
    }
  }

  addUser() {
    this.userService.addUser(this.username, this.password);
  }
}









  