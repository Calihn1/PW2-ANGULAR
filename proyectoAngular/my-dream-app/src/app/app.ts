import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HelloWorld],
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

  newHobby(hobby : any) {
    //console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
}


