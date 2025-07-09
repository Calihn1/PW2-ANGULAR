import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'crud';
  movies = [
    { id: 1, title: 'peli1', year: 2021 },
    { id: 2, title: 'peli2', year: 2022 }
  ];

  constructor(private api: Api) {
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        console.log(data);
        // this.movies = data;  // Puedes descomentar esta línea para asignar los datos recibidos
      },
      error => {
        console.log(error);
      }
    );
  }
}
