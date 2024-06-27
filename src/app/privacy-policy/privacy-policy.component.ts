import { Component, OnInit } from '@angular/core';
import { ShadowComponent } from '../shadow/shadow.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ShadowComponent, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  hover: boolean = false;
  currentLanguage: string;

  constructor(public languageService: LanguageService) { 
    this.currentLanguage = this.languageService.getLanguage();
    this.languageService.language = this.currentLanguage;
  }

  ngOnInit(): void {

  }

}
