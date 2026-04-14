import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  appComponent = new AppComponent();
  empresa: AppComponent['empresa'] = this.appComponent.empresa;
  
  ngOnInit(): void {
    // Aplicar la animación de entrada después de un breve retraso
    setTimeout(() => {
      const container = document.querySelector('.home-container') as HTMLElement;
      if (container) {
        container.classList.add('visible');
      }
    }, 100);
  }
  
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
