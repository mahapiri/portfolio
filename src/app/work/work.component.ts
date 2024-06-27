import { Component } from '@angular/core';
import { Work } from '../../models/work.interface';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss', './work-mobile.component.scss']
})
export class WorkComponent {
  constructor(public languageService: LanguageService) {}


  work: Work[] = [
    {
      title: 'Join',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      descriptionEn: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDe: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      link: 'https://google.com/',
      git: 'https://github.com/',
      img: 'assets/img/mockup-join.png'
    },
    {
      title: 'El Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      descriptionEn: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the endboss.',
      descriptionDe: 'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Salsa Flaschen zu finden, um gegen den Endboss zu kämpfen.',
      link: 'https://google.com/',
      git: 'https://github.com/',
      img: 'assets/img/mockup-elpollo.png'
    },
    {
      title: 'DaBubble',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      descriptionEn: 'A messenger plattform.',
      descriptionDe: 'Eine Messenger-Plattform.',
      link: 'https://google.com/',
      git: 'https://github.com/',
      img: 'assets/img/mockup-vscode.png'
    },
  ]
}
