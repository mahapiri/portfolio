import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../services/language/language.service';
import { VisibilityOnScrollService } from '../services/visibility-on-scroll/visibility-on-scroll.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss', './above-the-fold-mobile.component.scss']
})
export class AboveTheFoldComponent implements OnInit {
  isVisible: boolean = false;

  constructor(public languageService : LanguageService, private visibilityOnScrollService: VisibilityOnScrollService) {}

  ngOnInit(): void {
    this.checkVisibility();
}


@HostListener('window:scroll', [])


onWindowScroll() {
    this.checkVisibility();
}


checkVisibility() {
    setTimeout(() => {
        let elementId = 'atf';
        this.visibilityOnScrollService.onWindowScroll(elementId);
        this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
    }, 100);
}
}
