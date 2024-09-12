import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseurlService } from '../../baseurl.service';

@Injectable({
  providedIn: 'root',
})
export class GetusersService {
  url!: string;
  constructor(private http: HttpClient, private baseUrl: BaseurlService) {}
  getUsers<T>(): Observable<T> {
    return this.http.get<T>(`${this.getUrl()}/users`);
  }
  getUrl(): string {
    this.url = this.baseUrl.baseUrl();
    return this.url;
  }
}
