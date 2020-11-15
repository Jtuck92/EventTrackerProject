package com.skilldistillery.animation.services;

import java.util.List;

import com.skilldistillery.animation.entities.AnimatedFeature;

public interface AnimatedFeatureService {

	List<AnimatedFeature> findAll();

	AnimatedFeature findById(int featureId);

	AnimatedFeature create(AnimatedFeature feature);

	AnimatedFeature replace(int featureId, AnimatedFeature feature);

	boolean delete(int featureId);
}
