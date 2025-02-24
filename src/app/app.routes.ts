import { Routes } from '@angular/router';
import {ProjectsComponent} from './components/projects/projects.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];
