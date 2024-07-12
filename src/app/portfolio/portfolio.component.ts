import { Component, HostListener } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { LanguageService } from '../services/language/language.service';
import { VisibilityOnScrollService } from '../services/visibility-on-scroll/visibility-on-scroll.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [WorkComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio-mobile.component.scss']
})
export class PortfolioComponent {
  isVisible: boolean = false;


  /**
  * Creates an instance of PortfolioComponent.
  * 
  * @param {LanguageService} languageService - The language service to manage language settings.
  * @param {VisibilityOnScrollService} visibilityOnScrollService - The service to check element visibility on scroll.
  */
  constructor(public languageService: LanguageService, private visibilityOnScrollService: VisibilityOnScrollService) { }


  /**
  * Initializes the component and checks the visibility of the portfolio element.
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
  * Checks the visibility of the portfolio element on scroll.
  */
  checkVisibility() {
      setTimeout(() => {
          let elementId = 'portfolio';
          this.visibilityOnScrollService.onWindowScroll(elementId);
          this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
      }, 100);
  }
}
