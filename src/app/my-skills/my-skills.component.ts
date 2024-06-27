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
      let elementId = 'skills';
      this.visibilityOnScrollService.onWindowScroll(elementId);
      this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
    }, 100);
  }
}
