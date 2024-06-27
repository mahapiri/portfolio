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
        console.log(`Element ${elementId} is visible`);
      } else {
        this.visibilityMap[elementId] = false;
        console.log(`Element ${elementId} is not visible`);
      }
    }
  }

  isElementVisible(elementId: string): boolean {
    return this.visibilityMap[elementId] || false;
  }
}