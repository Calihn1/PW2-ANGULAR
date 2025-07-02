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
  name = 'Emanuel Hilacondo B.';
  email = 'ehilacondob@unsa.edu.pe';
  webpage = 'http://www.unsa.edu.pe';
}


