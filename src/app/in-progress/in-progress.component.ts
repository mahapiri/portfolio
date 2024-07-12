import { Component } from '@angular/core';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-in-progress',
  standalone: true,
  imports: [],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.scss'
})
export class InProgressComponent {
  currentLanguage: string;


  /**
  * Creates an instance of InProgressComponent.
  * 
  * @param {LanguageService} languageService - The language service to manage language settings.
  */
  constructor(public languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
    this.languageService.language = this.currentLanguage;
  }
}
