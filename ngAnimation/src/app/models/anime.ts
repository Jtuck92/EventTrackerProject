export class Anime {
  id: number;
  title: string;
  length: number;
  director: string;
  description: string;
  releaseYear: number;
  genre: string;

  constructor(
  id?: number,
  title?: string,
  length?: number,
  director?: string,
  description?: string,
  releaseYear?: number,
  genre?: string,
    ) {
      this.id = id;
      this.title = title;
      this.length = length;
      this.director = director;
      this.description = description;
      this.releaseYear = releaseYear;
      this.genre = genre;
    }
}
