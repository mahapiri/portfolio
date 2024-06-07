import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // visited(id: string) {
  //   let div = document.querySelectorAll('.visited');
  //   div.forEach(element => {
  //     element.classList.remove('visited');
  //   });
  //   let element = document.getElementById(id);
  //   element?.classList.add('visited');
  // }

  activeLink: string | null = null;

  visited(id: string) {
    this.activeLink = id;
  }
}
