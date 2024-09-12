import { DOCUMENT } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const document = inject(DOCUMENT);
  const loader = document.getElementById('loader');

  if (loader) {
    loader!.classList.remove('d-none');
  }

  return next(req).pipe(finalize(() => loader!.classList.add('d-none')));
};
