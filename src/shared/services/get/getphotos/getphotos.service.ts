import { Injectable } from '@angular/core';
import { BaseurlService } from '../../baseurl.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetphotosService {
  constructor(private http: HttpClient, private baseUrl: BaseurlService) {}

  getPhotos<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.getBaseUrl()}photos?albumId=${id}`);
  }

  getBaseUrl(): string {
    return this.baseUrl.baseUrl();
  }
}
