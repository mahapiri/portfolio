import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public language: string;

  constructor() { 
    this.language = 'English';
  }

  setLanguage(language: string) {
    this.language = language;
    console.log(this.language)
  }

  getLanguage() {
    return this.language;
  }
}
