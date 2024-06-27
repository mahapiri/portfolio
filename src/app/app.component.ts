import { AfterViewInit, Component, OnInit } from '@angular/core';
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

export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  isLoading = true;

  constructor(private router: Router) {

  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false
      console.log('geladen')
    }, 2000)
  }
}
