import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChooseDefaultAppLangService } from '../shared/services/translate-app/choose-default-lang.service';
import { LocalstorageLangService } from '../shared/services/translate-app/localstorage-lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { ChooselangComponent } from '../components/chooselang/chooselang.component';
import { LoaderComponent } from '../components/loader/loader.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    ChooselangComponent,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appDeafultLang = inject(ChooseDefaultAppLangService);
  getLangFromLocal = inject(LocalstorageLangService);

  ngOnInit(): void {
    this.setDeafultLang();
  }

  setDeafultLang(): void {
    this.appDeafultLang.chooseAppLang(this.getLangFromLocal.getChossenLang());
  }
}
