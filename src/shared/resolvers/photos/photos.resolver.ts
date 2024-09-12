import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GetphotosService } from '../../services/get/getphotos/getphotos.service';
import { Observable } from 'rxjs';
import { Photos } from '../../interfaces/photos/photos';

export const photosResolver: ResolveFn<Photos[]> = (route, state) => {
  const getPhotos = inject(GetphotosService);
  let id: string;

  function getAllPhotos(): Observable<Photos[]> {
    return getPhotos.getPhotos<Photos[]>(getId());
  }

  function getId(): number {
    id = route.paramMap.get('id')!;
    return +id;
  }
  return getAllPhotos();
};
