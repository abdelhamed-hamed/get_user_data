import { Injectable } from '@angular/core';
import { LocalstorageLangService } from './localstorage-lang.service';

@Injectable({
  providedIn: 'root',
})
export class ChangDirectionAndLangService {
  htmlTag!: HTMLElement;
  bodyTag!: HTMLElement;
  constructor(private chossenLang: LocalstorageLangService) {
    this.htmlTag = document.getElementsByTagName('html')[0];
    this.bodyTag = document.getElementsByTagName('body')[0];
  }

  changHtmlLang(): void {
    this.htmlTag.lang = this.chossenLang.getChossenLang();
    this.changBodyDirection();
  }

  changBodyDirection(): void {
    this.bodyTag.dir = this.selectDir();
  }

  selectDir(): string {
    return this.chossenLang.getChossenLang() == 'ar' ? 'rtl' : 'ltr';
  }
}
