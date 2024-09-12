import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseurlService } from '../../baseurl.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GettodosService {
  constructor(private http: HttpClient, private baseUrl: BaseurlService) {}

  getTodos<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl.baseUrl()}todos?userId=${id}`);
  }

  getBaseUrl(): string {
    return this.baseUrl.baseUrl();
  }
}
