package com.skilldistillery.animation.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "animated_feature")
public class AnimatedFeature {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private Integer length;
	private String director;
	private String description;

	@Column(name = "release_year")
	private Integer releaseYear;
	private String genre;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getLength() {
		return length;
	}

	public void setLength(Integer length) {
		this.length = length;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getReleaseYear() {
		return releaseYear;
	}

	public void setReleaseYear(Integer releaseYear) {
		this.releaseYear = releaseYear;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public AnimatedFeature() {
		super();
	}

	public AnimatedFeature(int id, String title, Integer length, String director, String description,
			Integer releaseYear, String genre) {
		super();
		this.id = id;
		this.title = title;
		this.length = length;
		this.director = director;
		this.description = description;
		this.releaseYear = releaseYear;
		this.genre = genre;
	}

	@Override
	public String toString() {
		return "AnimatedFeature [id=" + id + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AnimatedFeature other = (AnimatedFeature) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
