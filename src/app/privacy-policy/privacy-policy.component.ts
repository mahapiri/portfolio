import { Component } from '@angular/core';
import { ShadowComponent } from '../shadow/shadow.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ShadowComponent, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public languageService: LanguageService) { }
  hover: boolean = false;
}
