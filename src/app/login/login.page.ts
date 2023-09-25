import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    email: "",
    password: "",
  };

  type : boolean = true;

  constructor() { }

  changeType(){
    this.type = !this.type;
  }

  gotoHome(){

  }

  gmailLogin(){

  }

  twitterLogin(){

  }

  facebookLogin(){

  }

  touchLogin(){

  }

  gotToForget(){

  }

  faceLogin(){

  }

  goToRegister(){
    
  }

  ngOnInit() {
  }

}
