package com.skilldistillery.animation.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.animation.entities.AnimatedFeature;
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

	@GetMapping("features")
	public List<AnimatedFeature> listAnimatedFeatures() {
		return svc.findAll();
	}
	
	@GetMapping("features/{featureId}")
	public AnimatedFeature listFeaturesById(@PathVariable int featureId, HttpServletResponse response) {
		AnimatedFeature feature = svc.findById(featureId);
		if (feature == null) {
			response.setStatus(404);
		}
		return feature;
	}
	
	@PostMapping("features")
	public AnimatedFeature createAnimatedFeature(@RequestBody AnimatedFeature feature, HttpServletRequest request, HttpServletResponse response) {
		try {
			feature = svc.create(feature);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(feature.getId());
			String urlstr = url.toString();
			response.setHeader("Location", urlstr);
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			feature = null;
		}
		return feature;
	}
	
	@PutMapping(path = "features/{featureId}")
	public AnimatedFeature updateAnimatedFeature(@PathVariable int featureId, @RequestBody AnimatedFeature feature, HttpServletRequest request, HttpServletResponse response) {
		
			try {
				feature = svc.replace(featureId, feature);
				if (feature == null) {
					response.setStatus(404);
				}
			} catch (Exception e) {
				response.setStatus(400);
				e.printStackTrace();
				feature = null;
			}
		
		return feature;
	}
	
	@DeleteMapping(path = "features/{featureId}")
	public void deleteAnimatedFeature(@PathVariable int featureId, HttpServletResponse response) {
		try {
			if(svc.delete(featureId)) {
				response.setStatus(204);
			}
			else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(409);
		}
	}
}
