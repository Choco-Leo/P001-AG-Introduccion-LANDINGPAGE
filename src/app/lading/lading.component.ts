import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lading',
  imports: [],
  templateUrl: './lading.component.html',
  styleUrl: './lading.component.css'
})
export class LadingComponent {
  appComponent = new AppComponent();
  empresa: AppComponent['empresa'] = this.appComponent.empresa;
  
  constructor(private router: Router) {}
  
  navegarAHome() {
  
       this.router.navigate(['/home']);
     
  }
}
