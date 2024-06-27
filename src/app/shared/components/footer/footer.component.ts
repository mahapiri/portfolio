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
          let elementId = 'footer';
          this.visibilityOnScrollService.onWindowScroll(elementId);
          this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
      }, 100);
  }
}
