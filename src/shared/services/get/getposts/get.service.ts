import { Injectable } from '@angular/core';
import { BaseurlService } from '../../baseurl.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetPostsService {
  constructor(private http: HttpClient, private baseUrl: BaseurlService) {}

  getPosts<T>(userId: number): Observable<T> {
    return this.http.get<T>(`${this.getUrl()}/posts?userId=${userId}`);
  }

  getUrl(): string {
    return this.baseUrl.baseUrl();
  }
}
