import { Component, HostListener } from '@angular/core';
import { Work } from '../../models/work.interface';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language/language.service';
import { VisibilityOnScrollService } from '../services/visibility-on-scroll/visibility-on-scroll.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss', './work-mobile.component.scss']
})
export class WorkComponent {
  work: Work[] = [
    {
      title: 'Join',
      subtitle: 'HTML | CSS | JavaScript',
      descriptionEn: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDe: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      link: 'https://google.com/',
      git: 'https://github.com/mahapiri/join',
      img: 'assets/img/mockup-join.png'
    },
    {
      title: 'El Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      descriptionEn: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the endboss.',
      descriptionDe: 'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Salsa Flaschen zu finden, um gegen den Endboss zu kämpfen.',
      link: 'https://google.com/',
      git: 'https://github.com/mahapiri/el-pollo-loco-2',
      img: 'assets/img/mockup-elpollo.png'
    },
    {
      title: 'DaBubble (in progress)',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      descriptionEn: 'A messenger plattform.',
      descriptionDe: 'Eine Messenger-Plattform.',
      link: 'https://google.com/',
      git: 'https://github.com/mahapiri',
      img: 'assets/img/mockup-vscode.png'
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
      for (let i = 0; i < this.work.length; i++) {
        let elementId = `work-${i}`;
        this.visibilityOnScrollService.onWindowScroll(elementId);
        this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
      }
    }, 100);
  }

  isElementVisible(index: number): boolean {
    return this.visibilityOnScrollService.isElementVisible(`work-${index}`);
  }
}
