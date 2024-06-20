import { Component } from '@angular/core';
import { Icon } from '../../models/icon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', './my-skills-mobile.component.scss']
})


export class MySkillsComponent {
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

}
