import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'my-dream-app';
  name : string;
  email; // : string ;
  webpage : string;
  hobbies : string[];

  constructor() {
    console.log("Constructor working...");
    this.name = "Emanuel Hilacondo Begazo";
    this.email = "ehilacondob@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programación","Videojuegos"];
  }

  showhobbies() {
    return true;
  }
}


