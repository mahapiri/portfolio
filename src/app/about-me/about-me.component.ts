import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me-mobile.component.scss']
})
export class AboutMeComponent implements OnInit {
  isVisible: boolean = false;

  constructor(public languageService : LanguageService) {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
          const bounding = aboutMeSection.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;

          // console.log('Bounding Rect:', bounding);
          // console.log('Window Height:', windowHeight);

          if (bounding.top < windowHeight && bounding.bottom > 0) {
              this.isVisible = true;
              console.log('Element is visible');
          } else {
              this.isVisible = false;
              // console.log('Element is not visible');
          }
      }
  }

  ngOnInit(): void {
      setTimeout(() => {
          this.onWindowScroll();
      }, 1000000);
  }

}
