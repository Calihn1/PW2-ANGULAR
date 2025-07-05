import { Routes } from '@angular/router';
import { VideoList } from './video-list/video-list';
import { ShoppingCart } from './features/shopping-cart/shopping-cart';

export const routes: Routes = [
  // Ruta por defecto redirige a los videos
  { path: '', redirectTo: 'videos', pathMatch: 'full' }, 
  { path: 'videos', component: VideoList },
  { path: 'cart', component: ShoppingCart }
]