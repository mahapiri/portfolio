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
      link: 'https://join.pirathib-mahalingam.ch',
      git: 'https://github.com/mahapiri/join',
      img: 'assets/img/mockup-join.png'
    },
    {
      title: 'El Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      descriptionEn: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the endboss.',
      descriptionDe: 'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Salsa Flaschen zu finden, um gegen den Endboss zu kämpfen.',
      link: 'https://el-pollo-loco.pirathib-mahalingam.ch',
      git: 'https://github.com/mahapiri/el-pollo-loco-2',
      img: 'assets/img/mockup-elpollo.png'
    },
    {
      title: 'DaBubble',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      descriptionEn: 'A messenger plattform.',
      descriptionDe: 'Eine Messenger-Plattform.',
      link: 'https://da-bubble.pirathib-mahalingam.ch',
      git: 'https://github.com/mahapiri/dabubble',
      img: 'assets/img/mockup-dabubble.png'
    },
    {
      title: 'Alpiger - Real Project',
      subtitle: 'Angular | TypeScript | HTML | CSS | Django | Django Rest Framework | Python | SQLite | AWS EC2',
      descriptionEn: 'Real-world application developed for a Swiss logistics company. A truck branch finder with location-based services and detailed information for drivers. \n\nTo test the app: Login with username: office and password: Hallo123@',
      descriptionDe: 'Reale Anwendung für ein Schweizer Logistikunternehmen. Ein LKW-Filialfinder mit standortbasierten Services und detaillierten Informationen für Fahrer. \n\nZum Testen der App: Benutzername: office, Passwort: Hallo123@',
      link: 'https://alpiger.pirathib-mahalingam.ch',
      git: 'https://github.com/mahapiri/alpiger-fahrerapp-frontend',
      img: 'assets/img/mockup-alpiger.png'
    },
    {
      title: 'Join Pro (Fullstack)',
      subtitle: 'Angular | TypeScript | HTML | CSS | Django | Django Rest Framework | Python | SQLite',
      descriptionEn: 'Advanced Kanban-based task management application with fullstack implementation. Create, update, and delete tasks, assign users and categories, and collaborate in real-time using a REST API backend built with Django.',
      descriptionDe: 'Erweiterte Aufgabenmanagement-Anwendung basierend auf dem Kanban-System mit vollständiger Fullstack-Implementierung. Aufgaben erstellen, bearbeiten und löschen, Benutzer und Kategorien zuweisen und in Echtzeit zusammenarbeiten – unterstützt durch ein Django REST API-Backend.',
      link: 'https://join-pro.pirathib-mahalingam.ch',
      git: 'https://github.com/mahapiri/join-frontend',
      img: 'assets/img/mockup-join-pro.png'
    },
  ]
  isVisible: boolean = false;


  /**
  * Creates an instance of WorkComponent.
  * 
  * @param {LanguageService} languageService - The language service to manage language settings.
  * @param {VisibilityOnScrollService} visibilityOnScrollService - The service to check element visibility on scroll.
  */
  constructor(public languageService: LanguageService, private visibilityOnScrollService: VisibilityOnScrollService) { }


  /**
  * Initializes the component and checks the visibility of work elements.
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
  * Checks the visibility of each work element on scroll.
  */
  checkVisibility() {
    setTimeout(() => {
      for (let i = 0; i < this.work.length; i++) {
        let elementId = `work-${i}`;
        this.visibilityOnScrollService.onWindowScroll(elementId);
        this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
      }
    }, 100);
  }

  
  /**
  * Checks if a specific work element is visible.
  * 
  * @param {number} index - The index of the work element to check.
  * @returns {boolean} True if the element is visible, false otherwise.
  */
  isElementVisible(index: number): boolean {
    return this.visibilityOnScrollService.isElementVisible(`work-${index}`);
  }
}
