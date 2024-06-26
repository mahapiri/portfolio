import { Component } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [WorkComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio-mobile.component.scss']
})
export class PortfolioComponent {
  constructor(public languageService : LanguageService) {

  }
}
