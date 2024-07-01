import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [],
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss', './mail-mobile.component.scss']
})
export class MailComponent implements OnInit {
  currentLanguage: string;

  constructor(public languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
    this.languageService.language = this.currentLanguage;
  }

  ngOnInit(): void {

  }
}
