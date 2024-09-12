import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HandleErrorService } from '../services/handle-error-request.service';
import { catchError } from 'rxjs';

export const errorRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const handleError = inject(HandleErrorService);
  return next(req).pipe(catchError(handleError.handleError));
};
