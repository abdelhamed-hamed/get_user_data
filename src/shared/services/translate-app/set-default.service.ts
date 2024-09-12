import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangDirectionAndLangService } from './change-direction-and-lang.service';
@Injectable({
  providedIn: 'root',
})
export class SetDefaultService {
  constructor(
    private setDefaultLang: TranslateService,
    private chngeLangAndDirection: ChangDirectionAndLangService
  ) {}
  setDeafaultLanguage(lang: string): void {
    this.setDefaultLang.setDefaultLang(lang);
    this.chngeLangAndDirection.changHtmlLang();
  }
}
