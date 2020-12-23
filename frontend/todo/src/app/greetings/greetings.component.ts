import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  message = 'Valkommen till din hemsidan!!'
  name = ''
  welcomeMessageFromService: string
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){

    //meaning of subscribe => when the observable is successful, call handleSuccessfulResponse
    //advantage of using observable is that we dont need to let the thread hanging, the code
    //executes after the declaration.
   this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response), //declaration     <parameters for subscribe>
      error => this.handleErrorResponse(error)
      
      // response => console.log(response.message)
     );
    //console.log("get welcome message!")
  }

  getWelcomeMessageWithParameter(){

    //meaning of subscribe => when the observable is successful, call handleSuccessfulResponse
    //advantage of using observable is that we dont need to let the thread hanging, the code
    //executes after the declaration.
   this.service.executeHelloWorldBeanServicePathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response), //declaration     <parameters for subscribe>
      error => this.handleErrorResponse(error)
      
      // response => console.log(response.message)
     );
    //console.log("get welcome message!")
  }

  handleSuccessfulResponse(response) {
    //console.log(response);
    //console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
   // console.log(error)
   // console.log(error.error)
   // console.log(error.error.message)

    this.welcomeMessageFromService = error.error.message;
  }

}
