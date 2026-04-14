import { Routes } from '@angular/router';
import { LadingComponent } from './lading/lading.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
 {
    path:'',
    component: LadingComponent,
    title: 'ChocoLeo',
 },
 {
   path:'home',
    component: HomeComponent,
    title: 'ChocoLeo',
 }
];
