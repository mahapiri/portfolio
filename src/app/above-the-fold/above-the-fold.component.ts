import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss', './above-the-fold-mobile.component.scss']
})
export class AboveTheFoldComponent {
  constructor(public languageService : LanguageService) {

  }
}
