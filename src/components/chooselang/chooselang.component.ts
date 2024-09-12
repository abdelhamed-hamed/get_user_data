import { Component } from '@angular/core';
import { ChangeAppLangService } from '../../shared/services/translate-app/change-app-lang.service';
import { LocalstorageLangService } from '../../shared/services/translate-app/localstorage-lang.service';

@Component({
  selector: 'app-chooselang',
  standalone: true,
  imports: [],
  templateUrl: './chooselang.component.html',
  styleUrl: './chooselang.component.scss',
})
export class ChooselangComponent {
  constructor(
    private changeApplang: ChangeAppLangService,
    private getLangFromLocal: LocalstorageLangService
  ) {}

  changLang(lang: string): void {
    this.getLangFromLocal.setChossenLangInStorage(lang);
    this.changeApplang.changAppLanguage(lang);
  }
}
