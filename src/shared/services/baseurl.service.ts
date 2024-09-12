import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseurlService {
  baseUrl(): string {
    let baseUrl: string = `https://jsonplaceholder.typicode.com/`;
    return baseUrl;
  }
}
