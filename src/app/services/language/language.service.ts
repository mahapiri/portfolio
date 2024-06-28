import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string;


  constructor() {
    this.language = 'English';
  }

  setLanguage(language: string) {
    // Sprache im localStorage speichern
    localStorage.setItem('language', JSON.stringify(language));
    this.language = language; // Aktuellen Service-Zustand aktualisieren
  }

  getLanguage() {
    let localStored: any = localStorage.getItem('language'); 
    return this.language ? JSON.parse(localStored) : this.setLanguage('English');
  }
}