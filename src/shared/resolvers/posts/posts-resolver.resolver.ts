import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GetPostsService } from '../../services/get/getposts/get.service';
import { Posts } from '../../interfaces/posts/posts';
import { Observable } from 'rxjs';

export const postsResolverResolver: ResolveFn<Posts[]> = (route, state) => {
  const getPostsService = inject(GetPostsService);
  let id!: string;

  function getPosts(): Observable<Posts[]> {
    return getPostsService.getPosts<Posts[]>(getIdFromLink());
  }

  function getIdFromLink(): number {
    id = route.paramMap.get('id')!;
    return +id;
  }

  return getPosts();
};
