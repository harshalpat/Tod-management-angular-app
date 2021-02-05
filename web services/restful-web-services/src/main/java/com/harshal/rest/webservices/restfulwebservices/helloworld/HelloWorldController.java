package com.harshal.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
	
	
	//URI (resources)
	//method - "Hello-World"

	@GetMapping(path="/Hello-World")
	public String helloworld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path="/Hello-World-bean")
	public HelloWorldBean helloworldBean() {
		//throw new RuntimeException("Some error has occurred!!");
		return new HelloWorldBean("Hello World - from eclipse!");
	}
	
	//hello-world-path-variables
	@GetMapping(path="/Hello-World/Path-Variable/{name}")
	public HelloWorldBean helloworldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World %s",name));
	}

}
