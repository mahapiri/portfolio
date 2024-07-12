import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string;


  /**
  * Creates an instance of LanguageService and sets the default language to English.
  */
  constructor() {
    this.language = 'English';
  }

  
  /**
  * Sets the current language and saves it to local storage.
  * 
  * @param {string} language - The language to be set.
  */
  setLanguage(language: string) {
    localStorage.setItem('language', JSON.stringify(language));
    this.language = language;
  }


  /**
  * Gets the current language from local storage, or sets it to English if not found.
  * 
  * @returns {string} The current language.
  */
  getLanguage() {
    let localStored: any = localStorage.getItem('language'); 
    return this.language ? JSON.parse(localStored) : this.setLanguage('English');
  }
}