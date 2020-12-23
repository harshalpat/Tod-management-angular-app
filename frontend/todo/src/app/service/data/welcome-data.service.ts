import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/Hello-World-bean')
    //console.log("Executed Hello World Bean Service!")
  }

  executeHelloWorldBeanServicePathVariable(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/Hello-World/Path-Variable/${name}`)
    //console.log("Executed Hello World Bean Service!")
  }
}
