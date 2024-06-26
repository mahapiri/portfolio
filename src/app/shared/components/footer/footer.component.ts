import { Component } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer-mobile.component.scss']
})
export class FooterComponent {
  constructor(public languageService: LanguageService) { }
}
