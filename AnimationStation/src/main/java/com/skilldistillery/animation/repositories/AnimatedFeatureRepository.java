package com.skilldistillery.animation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.animation.entities.AnimatedFeature;

@Repository
public interface AnimatedFeatureRepository extends JpaRepository<AnimatedFeature, Integer> {

}
