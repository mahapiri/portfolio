import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityOnScrollService {
  private visibilityMap: { [elementId: string]: boolean } = {};

  constructor() { }

  onWindowScroll(elementId: string) {
    let section = document.getElementById(elementId);
    if (section) {
      const bounding = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (bounding.top < windowHeight && bounding.bottom > 0) {
        this.visibilityMap[elementId] = true;
      } else {
        this.visibilityMap[elementId] = false;
      }
    }
  }

  
  isElementVisible(elementId: string): boolean {
    return this.visibilityMap[elementId] || false;
  }
}