import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Route } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { User } from './user/user';
import { FormsModule } from '@angular/forms';
import { Data } from './data';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HelloWorld, User, FormsModule],
  providers : [Data],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'my-dream-app';
  name : string = "Emanuel Hilacondo Begazo";
  age : number = 18;
  email: string = "ehilacondob@unsa.edu.pe";
  webpage : string = "http://www.unsa.edu.pe";
  hobbies : string[] = ["Futbol","Programación","Videojuegos"];
  showHobbies: boolean = false;
  users = ['ryan', 'joe', 'cameron', 'john'];
  activated = false;
  posts : any[] = [];

  constructor(private data: Data) {
    this.data.getData().subscribe(data => {
      //console.log(data);
      this.posts = data;
    })
  }
  /* constructor() {
    console.log("Constructor working...");
    this.name = "Emanuel Hilacondo B.";
    this.email = "ehilacondob@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programación","Videojuegos"];
    this.showHobbies = false;
  } */

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby : any) {
    //console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }

  sayHello() {
    alert("Hola desde app");
  }

  deleteUser(user : any) {
    for(let i=0; i<this.users.length; i++) {
      if(user==this.users[i]) {
        this.users.splice(i,1);
      }
    }
  }

  addUser(newUser : any) {
    //console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}


