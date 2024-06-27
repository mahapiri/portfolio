import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  hover: boolean = false;
  currentLanguage: string;

  constructor(public languageService: LanguageService) { 
    this.currentLanguage = this.languageService.getLanguage();
    this.languageService.language = this.currentLanguage;
  }
}
