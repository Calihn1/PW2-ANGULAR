import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../shared/pipes/safe-pipe'; // Importamos nuestro pipe

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe], 
  templateUrl: './video-list.html',
  styleUrls: ['./video-list.css']
})
export class VideoList {
  title = "Últimos Videos de Marvel";

  videos = [
    {
      title: 'Wakanda Forever (2022) Marvel Tráiler Oficial Español',
      embedUrl: 'https://www.youtube.com/embed/R-A2p_G_3gQ'
    },
    {
      title: "Marvel Studios' Thor: Love and Thunder | Official Trailer",
      embedUrl: 'https://www.youtube.com/embed/Go8nTmfrQd8'
    },
    {
      title: "Avengers: Infinity War - Tráiler Oficial",
      embedUrl: 'https://www.youtube.com/embed/6ZfuNTqbHE8'
    }
  ];
}