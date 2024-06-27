import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { BurgerMenuComponent } from '../../../burger-menu/burger-menu.component';
import { LanguageService } from '../../../services/language/language.service';
import { VisibilityOnScrollService } from '../../../services/visibility-on-scroll/visibility-on-scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-mobile.component.scss']
})
export class HeaderComponent implements OnInit {
  isVisible: boolean = false;
  activeLink: string | null = null;
  clickedMenu: boolean = false;
  clickedLanguage: boolean = false;

  constructor(public languageService: LanguageService, private visibilityOnScrollService: VisibilityOnScrollService) { }


  ngOnInit(): void {
    this.checkVisibility();
  }

  visited(id: string) {
    this.activeLink = id;
  }

  openMenu() {
    this.clickedMenu = !this.clickedMenu;
  }

  openLanguage() {
    this.clickedLanguage = !this.clickedLanguage;
  }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    this.checkVisibility();
  }


  checkVisibility() {
    setTimeout(() => {
      let elementId = 'header';
      this.visibilityOnScrollService.onWindowScroll(elementId);
      this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
    }, 100);
  }
}
