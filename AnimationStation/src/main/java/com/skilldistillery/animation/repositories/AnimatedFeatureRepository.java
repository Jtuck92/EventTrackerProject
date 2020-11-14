package com.skilldistillery.animation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.animation.entities.AnimatedFeature;

public interface AnimatedFeatureRepository extends JpaRepository<AnimatedFeature, Integer> {

}
