import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { PhotosComponent } from './photos/photos.component';
import { AppComponent } from '../../app/app.component';
import { ErrorRequestComponent } from '../error-request/error-request.component';
import { ButtonServicesComponent } from '../button-services/button-services.component';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  declarations: [PostsComponent, PhotosComponent, TodosComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppComponent,
    ErrorRequestComponent,
    ButtonServicesComponent,
    LoaderComponent,
  ],
})
export class UsersModule {}
