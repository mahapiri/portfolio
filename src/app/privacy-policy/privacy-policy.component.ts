import { Component } from '@angular/core';
import { ShadowComponent } from '../shadow/shadow.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ShadowComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
