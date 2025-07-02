import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'my-dream-app';
  name : string;
  email; // : string ;
  webpage : string;
  hobbies : string[];
  showHobbies: boolean;

  constructor() {
    console.log("Constructor working...");
    this.name = "Emanuel Hilacondo Begazo";
    this.email = "ehilacondob@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programación","Videojuegos"];
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}


