import { inject, Injectable } from '@angular/core';
import { SetUsesLangService } from './set-uses-lang.service';
import { ChangDirectionAndLangService } from './change-direction-and-lang.service';
@Injectable({
  providedIn: 'root',
})
export class ChangeAppLangService {
  setAppLang = inject(SetUsesLangService);
  changeLangAndDirection = inject(ChangDirectionAndLangService);

  changAppLanguage(lang: string) {
    this.setAppLang.use(lang);
    this.changeLangAndDirection.changHtmlLang();
  }
}
