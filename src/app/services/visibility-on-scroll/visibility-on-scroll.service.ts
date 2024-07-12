import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityOnScrollService {
  private visibilityMap: { [elementId: string]: boolean } = {};

  constructor() { }


  /**
  * Updates the visibility status of a given element based on the window's scroll position.
  * 
  * @param {string} elementId - The ID of the element to check visibility for.
  */
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

  
  /**
  * Checks if the specified element is visible.
  * 
  * @param {string} elementId - The ID of the element to check.
  * @returns {boolean} True if the element is visible, false otherwise.
  */
  isElementVisible(elementId: string): boolean {
    return this.visibilityMap[elementId] || false;
  }
}