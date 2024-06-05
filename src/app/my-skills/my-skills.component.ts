import { Component } from '@angular/core';
import { Icon } from '../../models/icon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})


export class MySkillsComponent {
  icon: Icon[] = [
    {
      source: 'assets/img/skill-icons/angular.png',
      name: 'Angular'
    },
    {
      source: 'assets/img/skill-icons/api.png',
      name: 'Rest-Api'
    },
    {
      source: 'assets/img/skill-icons/css.png',
      name: 'CSS'
    },
    {
      source: 'assets/img/skill-icons/firebase.png',
      name: 'Firebase'
    },
    {
      source: 'assets/img/skill-icons/git.png',
      name: 'GIT'
    },
    {
      source: 'assets/img/skill-icons/html.png',
      name: 'HTML'
    },
    {
      source: 'assets/img/skill-icons/js.png',
      name: 'JavaScript'
    },
    {
      source: 'assets/img/skill-icons/md.png',
      name: 'Material design'
    },
    {
      source: 'assets/img/skill-icons/scrum.png',
      name: 'Scrum'
    },
    {
      source: 'assets/img/skill-icons/ts.png',
      name: 'TypeScript'
    },
    {
      source: 'assets/img/skill-icons/wp.png',
      name: 'Wordpress'
    },
  ]

}
