import { Component } from '@angular/core';
import { WorkComponent } from '../work/work.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [WorkComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
