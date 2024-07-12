import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';
import { VisibilityOnScrollService } from '../../../services/visibility-on-scroll/visibility-on-scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer-mobile.component.scss']
})
export class FooterComponent implements OnInit {
  isVisible: boolean = false;


  /**
  * Creates an instance of FooterComponent.
  * 
  * @param {LanguageService} languageService - The language service to manage language settings.
  * @param {VisibilityOnScrollService} visibilityOnScrollService - The service to check element visibility on scroll.
  */
  constructor(public languageService: LanguageService, private visibilityOnScrollService: VisibilityOnScrollService) { }


  /**
  * Initializes the component and checks the visibility of the footer element.
  */
  ngOnInit(): void {
      this.checkVisibility();
  }

  /**
  * Listens to window scroll events and triggers visibility check.
  */
  @HostListener('window:scroll', [])
  onWindowScroll() {
      this.checkVisibility();
  }

  
  /**
  * Checks the visibility of the footer element on scroll.
  */
  checkVisibility() {
      setTimeout(() => {
          let elementId = 'footer';
          this.visibilityOnScrollService.onWindowScroll(elementId);
          this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
      }, 100);
  }
}
