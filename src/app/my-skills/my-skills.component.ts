import { Component, HostListener, OnInit } from '@angular/core';
import { Icon } from '../../models/icon.interface';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language/language.service';
import { VisibilityOnScrollService } from '../services/visibility-on-scroll/visibility-on-scroll.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', './my-skills-mobile.component.scss']
})


export class MySkillsComponent implements OnInit {
  icons: Icon[] = [
    {
      source: 'angular.svg',
      name: 'Angular'
    },
    {
      source: 'api.svg',
      name: 'Rest-Api'
    },
    {
      source: 'css.svg',
      name: 'CSS'
    },
    {
      source: 'firebase.svg',
      name: 'Firebase'
    },
    {
      source: 'git.svg',
      name: 'GIT'
    },
    {
      source: 'html.svg',
      name: 'HTML'
    },
    {
      source: 'js.svg',
      name: 'JavaScript'
    },
    {
      source: 'md.svg',
      name: 'Material design'
    },
    {
      source: 'scrum.svg',
      name: 'Scrum'
    },
    {
      source: 'ts.svg',
      name: 'TypeScript'
    },
    {
      source: 'wp.svg',
      name: 'Wordpress'
    },
  ]
  isVisible: boolean = false;


  /**
  * Creates an instance of MySkillsComponent.
  * 
  * @param {LanguageService} languageService - The language service to manage language settings.
  * @param {VisibilityOnScrollService} visibilityOnScrollService - The service to check element visibility on scroll.
  */
  constructor(public languageService: LanguageService, private visibilityOnScrollService: VisibilityOnScrollService) { }


  /**
  * Initializes the component and checks the visibility of the skills element.
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
  * Checks the visibility of the skills element on scroll.
  */
  checkVisibility() {
    setTimeout(() => {
      let elementId = 'skills';
      this.visibilityOnScrollService.onWindowScroll(elementId);
      this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
    }, 100);
  }
}
