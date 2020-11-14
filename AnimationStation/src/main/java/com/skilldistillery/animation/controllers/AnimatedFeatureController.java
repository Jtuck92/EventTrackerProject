package com.skilldistillery.animation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.animation.services.AnimatedFeatureService;

@RequestMapping("api")
@RestController
public class AnimatedFeatureController {
	
	@Autowired
	private AnimatedFeatureService svc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
	}

}
