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


  /**
  * Creates an instance of HeaderComponent.
  * 
  * @param {LanguageService} languageService - The language service to manage language settings.
  * @param {ElementRef} eRef - Reference to the element for handling outside click events.
  */
  constructor(public languageService: LanguageService, private eRef: ElementRef) { }


  /**
  * Initializes the component and sets the imagesLoaded property after a delay.
  */
  ngOnInit(): void {
    setTimeout(() => {
      this.imagesLoaded = true;
    }, 500);
  }


  /**
  * Marks the provided link as visited and closes the menu.
  * 
  * @param {string} id - The ID of the link to be marked as visited.
  */
  visited(id: string) {
    this.activeLink = id;
    this.clickedMenu = false;
  }


  /**
  * Toggles the state of the menu between open and closed.
  */
  openMenu() {
    this.clickedMenu = !this.clickedMenu;
  }


  /**
  * Toggles the state of the language selection dropdown.
  */
  openLanguage() {
    this.clickedLanguage = !this.clickedLanguage;
  }

  
  /**
  * Handles clicks outside the component to close the language selection dropdown.
  * 
  * @param {Event} event - The click event.
  */
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.clickedLanguage = false;
    }
  }
}
