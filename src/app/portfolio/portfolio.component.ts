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

  constructor(public languageService: LanguageService, private visibilityOnScrollService: VisibilityOnScrollService) { }


  ngOnInit(): void {
      this.checkVisibility();
  }


  @HostListener('window:scroll', [])


  onWindowScroll() {
      this.checkVisibility();
  }


  checkVisibility() {
      setTimeout(() => {
          let elementId = 'portfolio';
          this.visibilityOnScrollService.onWindowScroll(elementId);
          this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
      }, 100);
  }
}
