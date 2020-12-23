import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(private todoService: TodoDataService, 
    private router:Router) { }

  todos: Todo[]

  message: string="";


  // Making it structured by using Todo class!!

  //  Todos = [
  //    { id: 1, description: 'Finish your thesis draft!', done: false, targetDate: new Date() },
  //    { id: 2, description: 'Update your resume!', done: false, targetDate: new Date() },
  //    { id: 3, description: 'Get a freaking JOB!', done: false, targetDate: new Date() }

  //  ]

  // Sort of unstructured format!

  //Todos = [
  //  { id: 1, description: 'Finish your thesis draft!' },
  //  { id: 2, description: 'Update your resume!' },
  //  { id: 3, description: 'Get a freaking JOB!!' }
  //]

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retireveAllTodos('harshal').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete Todo ${id}`);
    this.todoService.deleteTodo('harshal',id).subscribe(
      response =>{
        console.log(response);
        this.message =`Delete of todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id) {
    console.log(`Todo updated ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo() {
    this.router.navigate(['todos',-1]) //-1 represents this is a new todo task!
  }

}
