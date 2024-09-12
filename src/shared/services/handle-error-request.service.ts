import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  constructor(private router: Router) {}
  handleError(error: HttpErrorResponse): Observable<any> {
    switch (error.status) {
      case 400:
        return throwError('Bad Request');
      case 401: {
        this.router.navigate(['/login']);
        return throwError('Unauthorized');
      }
      case 404:
        return throwError('Not Found');
      case 500:
        return throwError('Internal Server Error');
      default:
        return throwError(
          'An error occurred try to check your connection and refresh your page'
        );
    }
  }
}
