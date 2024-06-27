import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string;


  constructor() {
    // Beim Initialisieren des Service die gespeicherte Sprache aus dem localStorage laden oder Standardwert 'English' setzen
    this.language = 'English';
  }

  setLanguage(language: string) {
    // Sprache im localStorage speichern
    localStorage.setItem('language', JSON.stringify(language));
    this.language = language; // Aktuellen Service-Zustand aktualisieren
  }

  getLanguage() {
    let localStored: any = localStorage.getItem('language'); 
    // Aktuelle Sprache aus dem Service-Zustand abrufen
    return this.language ? JSON.parse(localStored) : 'English';
  }
}