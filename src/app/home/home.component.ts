import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { ShadowComponent } from '../shadow/shadow.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboveTheFoldComponent, ShadowComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentLanguage: string;

  constructor(public languageService: LanguageService) { 
    this.currentLanguage = this.languageService.getLanguage();
    this.languageService.language = this.currentLanguage;
  }
}
