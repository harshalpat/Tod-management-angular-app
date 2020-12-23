import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'harshal'
  password = ''
  invalidLogin = false
  errormessage = 'Invalid credentials entered. Try again!'


  //Router
  //Dependency injection

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {

    // if (this.username === 'harshal' && this.password === 'Harshal#1') {
    //redirect to greetings page!!

    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['greetings', this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }


}
