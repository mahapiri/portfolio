import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.adjustFooterPosition(event.url);
      }
    })
  }


  adjustFooterPosition(url: string) {
    let footer = document.getElementById('footer');
    if (footer) {
      if (url.includes('imprint')) {
        footer.style.top = '1472px';
      } else if (url.includes('privacy')) {
        footer.style.top = '8744px';
      } else {
        footer.style.top = '5042px';
      }
    }
  }
}
