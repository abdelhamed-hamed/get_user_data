import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class SetUsesLangService {
  constructor(private setLang: TranslateService) {}
  use(lang: string): Observable<any> {
    return this.setLang.use(lang);
  }
}
