import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  hover: boolean = false;

  constructor(public languageService: LanguageService) {}
}
