package com.skilldistillery.animation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.animation.entities.AnimatedFeature;
import com.skilldistillery.animation.repositories.AnimatedFeatureRepository;

@Service
public class AnimatedFeatureServiceImpl implements AnimatedFeatureService {

	@Autowired
	private AnimatedFeatureRepository repo;

	@Override
	public List<AnimatedFeature> getAllAnimatedFeatures() {
		// TODO Auto-generated method stub
		return null;
	}

}
