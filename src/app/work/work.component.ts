import { Component } from '@angular/core';
import { Work } from '../../models/work.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  work: Work[] = [
    {
      title: 'Join',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://google.com/',
      git: 'https://github.com/',
      img: 'assets/img/laptop.png'
    },
    {
      title: 'El Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: 'https://google.com/',
      git: 'https://github.com/',
      img: 'assets/img/laptop.png'
    },
    {
      title: 'DaBubble',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'A messenger plattform ',
      link: 'https://google.com/',
      git: 'https://github.com/',
      img: 'assets/img/laptop.png'
    },
    // {
    //   title: '',
    //   subtitle: '',
    //   description: '',
    //   link: 'https://google.com/',
    //   git: 'https://github.com/',
    //   img: 'assets/img/laptop.png'
    // },
  ]
}
