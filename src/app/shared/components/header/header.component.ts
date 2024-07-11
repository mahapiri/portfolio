import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { BurgerMenuComponent } from '../../../burger-menu/burger-menu.component';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-mobile.component.scss']
})
export class HeaderComponent implements OnInit {
  activeLink: string | null = null;
  clickedMenu: boolean = false;
  clickedLanguage: boolean = false;
  imagesLoaded: boolean = false;

  constructor(public languageService: LanguageService, private eRef: ElementRef) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.imagesLoaded = true;
    }, 500);
  }


  visited(id: string) {
    this.activeLink = id;
    this.clickedMenu = false;
  }


  openMenu() {
    this.clickedMenu = !this.clickedMenu;
  }


  openLanguage() {
    this.clickedLanguage = !this.clickedLanguage;
  }


  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.clickedLanguage = false;
    }
  }
}
