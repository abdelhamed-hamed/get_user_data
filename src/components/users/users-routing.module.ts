import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { postsResolverResolver } from '../../shared/resolvers/posts/posts-resolver.resolver';
import { todosResolver } from '../../shared/resolvers/todos/todos.resolver';
import { photosResolver } from '../../shared/resolvers/photos/photos.resolver';

const routes: Routes = [
  {
    path: 'posts/:id',
    component: PostsComponent,
    resolve: { postsDate: postsResolverResolver },
  },
  {
    path: 'todos/:id',
    component: TodosComponent,
    resolve: { todoDate: todosResolver },
  },
  {
    path: 'photos/:id',
    component: PhotosComponent,
    resolve: { photoDate: photosResolver },
  },
  { path: '', component: UsersComponent },
  { path: '*', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
