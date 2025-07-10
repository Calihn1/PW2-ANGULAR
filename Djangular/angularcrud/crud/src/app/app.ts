import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Api } from './api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'crud';
  movies: any[] = [];
    
  constructor(private api: Api) {
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        console.log(data);
        this.movies = data;  // Puedes descomentar esta línea para asignar los datos recibidos
      },
      error => {
        console.log(error);
      }
    );
  }
}
