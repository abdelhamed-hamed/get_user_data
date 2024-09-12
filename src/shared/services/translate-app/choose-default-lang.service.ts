import { Injectable } from '@angular/core';
import { SetDefaultService } from './set-default.service';

@Injectable({
  providedIn: 'root',
})
export class ChooseDefaultAppLangService {
  constructor(private chooseLang: SetDefaultService) {}

  chooseAppLang(lang: string): void {
    this.chooseLang.setDeafaultLanguage(lang);
  }
}
