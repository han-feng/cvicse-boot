package com.cvicse.boot.rest;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestControoler {

	@Autowired
	private ServletContext servletContext;

	@GetMapping("/hello")
	public String hello() {
		return "Hello";
	}

	@GetMapping("/filters")
	public Object getConfig() {
		return servletContext.getFilterRegistrations();
	}

}
