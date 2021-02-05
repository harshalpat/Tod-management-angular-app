package com.harshal.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import antlr.preprocessor.Tool;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;

	static { 

		todos.add(new Todo(++idCounter, "harshal", "finish thesis draft ASAP", new Date(), false));
		todos.add(new Todo(++idCounter, "harshal", "Update your resume!", new Date(), false));
		todos.add(new Todo(++idCounter, "harshal", "Become a software developer at Ericsson!", new Date(), false)); 
	} 
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
  
	// to delete a todo task

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null)
			return null;

		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	
	// retrieve all tasks available
	public List<Todo> findAll() {
		return todos;
	}

	// find a task with given id to use further
	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id)
				return todo;
		}
		return null;
	}

}
