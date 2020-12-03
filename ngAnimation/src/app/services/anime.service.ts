import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Anime } from 'src/app/models/anime';
@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/features';

  constructor(private http: HttpClient) {}

  index(): Observable<Anime[]> {
    console.log('*********');
    return this.http.get<Anime[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          'AnimeService.index(): Error retrieving feature list'
          );
        })
        );
      }
      create(anime: Anime): Observable<Anime> {
      console.log('*********' + anime);
    return this.http.post<Anime>(this.url, anime).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('AnimeService.create(): Error creating feature');
      })
    );
  }
  update(anime: Anime): Observable<Anime> {
    return this.http.put<Anime>(`${this.url}/${anime.id}`, anime).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('AnimeService: Error retrieving feature list');
      })
    );
  }
  destroy(animeId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${animeId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('AnimeService.destroy(): Error deleting feature');
      })
    );
  }
}
