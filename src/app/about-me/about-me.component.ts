import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me-mobile.component.scss']
})
export class AboutMeComponent implements OnInit {
  isVisible: boolean = false;

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
      // Use a timeout to ensure that the element is rendered before checking visibility
      setTimeout(() => {
          this.onWindowScroll(); // Check visibility on init
      }, 100);
  }

}
