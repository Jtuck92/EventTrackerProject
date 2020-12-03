import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  animes: Anime[] = [];
  selected = null;
  newAnime: Anime = new Anime();
  editAnime: Anime = null;
  // title: 'ngAnime';
  // animeService: any;
  // todos: any;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.loadAnime();
  }

  loadAnime(): void {
    this.animeService.index().subscribe(
      (animes) => {
        this.animes = animes;
      },
      (fail) => {
        console.error(
          'AnimeListComponent.loadAnime(): Error fetching features'
        );
        console.error(fail);
      }
    );
  }
  addAnime(anime: Anime): void {
    console.log('*******' + this.newAnime.title);
    this.animeService.create(this.newAnime).subscribe(
      (animes) => {
        this.newAnime = new Anime();
        this.loadAnime();
      },
      (fail) => {
        console.error(
          'AnimeListComponent.loadAnime(): Error fetching features'
        );
        console.error(fail);
      }
    );
  }
  updateAnime(anime: Anime) {
    this.animeService.update(anime).subscribe(
      (animes) => {
        this.editAnime = null;
        this.loadAnime();
      },
      (fail) => {
        console.error(
          'AnimeListComponent.loadAnime(): Error fetching features'
        );
        console.error(fail);
      }
    );
  }

  deleteAnime(animeId: number): void {
    this.animeService.destroy(animeId).subscribe(
      (data) => {
        this.loadAnime();
      },
      (fail) => {
        console.error(
          'AnimeListComponent.deleteAnime(): Error removing feature'
        );
        console.error(fail);
      }
    );
  }

  setEditAnime() {
    this.editAnime = Object.assign({}, this.selected);
  }
  animeCount(): number {
    return this.animes.length;
  }
  displayAnime(anime: Anime) {
    this.selected = anime;
  }
}
