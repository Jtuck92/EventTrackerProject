package com.skilldistillery.animation.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.animation.entities.AnimatedFeature;
import com.skilldistillery.animation.repositories.AnimatedFeatureRepository;

@Service
public class AnimatedFeatureServiceImpl implements AnimatedFeatureService {

	@Autowired
	private AnimatedFeatureRepository repo;

	@Override
	public List<AnimatedFeature> findAll() {
		return repo.findAll();
	}

	@Override
	public AnimatedFeature findById(int featureId) {
		Optional<AnimatedFeature> featureOpt = repo.findById(featureId);
		AnimatedFeature feature = null;
		if(featureOpt.isPresent()) {
			feature = featureOpt.get();
		}
		return feature;
	}

	@Override
	public AnimatedFeature create(AnimatedFeature feature) {
		repo.saveAndFlush(feature);
		System.out.println("*******" + feature);
		return feature;
	}

	@Override
	public AnimatedFeature replace(int featureId, AnimatedFeature feature) {
		Optional<AnimatedFeature> featureOpt = repo.findById(featureId);
		AnimatedFeature managedFeature = null;
		if(featureOpt.isPresent()) {
			managedFeature = featureOpt.get();
			
			managedFeature.setTitle(feature.getTitle());
			managedFeature.setLength(feature.getLength());
			managedFeature.setDirector(feature.getDirector());
			managedFeature.setDescription(feature.getDescription());
			managedFeature.setReleaseYear(feature.getReleaseYear());
			managedFeature.setGenre(feature.getGenre());
		}
		repo.saveAndFlush(feature);
		return managedFeature;
	}

	@Override
	public boolean delete(int featureId) {
		Optional<AnimatedFeature> featureOpt = repo.findById(featureId);
		if(featureOpt.isPresent()) {
			AnimatedFeature deletedFeature = featureOpt.get();
			repo.delete(deletedFeature);
			return true;
		}
		return false;
	}

}
