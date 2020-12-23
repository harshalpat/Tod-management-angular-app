import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    //  console.log(`before ${this.isUserLoggedIn()}`);
    if (username === "harshal" && password === 'Harshal#1') {
      sessionStorage.setItem('AuthenticatedUser', username);
    //  console.log('after ' + this.isUserLoggedIn());
      return true
    }
    return false
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('AuthenticatedUser');
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('AuthenticatedUser');
  }

}

