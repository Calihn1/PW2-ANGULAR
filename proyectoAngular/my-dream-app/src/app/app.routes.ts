import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { App } from './app';
import { About } from './about/about';

export const routes: Routes = [
  {path: '', component: App },
  {path: 'about', component: About },
  {path: 'hello', component: HelloWorld }, 
]
