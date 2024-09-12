import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageLangService {
  readonly langKey = 'lang';

  setChossenLangInStorage(setChossenLang: string): void {
    localStorage.setItem(this.langKey, setChossenLang);
  }

  getChossenLang(): string {
    return localStorage.getItem(this.langKey) ?? 'en';
  }
}
