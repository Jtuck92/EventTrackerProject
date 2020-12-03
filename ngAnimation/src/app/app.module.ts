import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeService } from './services/anime.service';


@NgModule({
  declarations: [AppComponent, AnimeListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AnimeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
