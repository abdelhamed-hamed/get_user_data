import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../../shared/interfaces/user/users';
import { TranslateModule } from '@ngx-translate/core';
import { Posts } from '../../shared/interfaces/posts/posts';
@Component({
  selector: 'app-button-services',
  standalone: true,
  imports: [TitleCasePipe, RouterLink, TranslateModule],
  templateUrl: './button-services.component.html',
  styleUrl: './button-services.component.scss',
})
export class ButtonServicesComponent {
  constructor(private route: Router) {}
  readonly users = 'users';
  @Input({ required: true }) userDetails!: Posts | Users;
  showPosts(): void {
    this.route.navigate([`${this.users}/posts`, this.userDetails.id]);
  }
  showTodos(): void {
    this.route.navigate([`${this.users}/todos`, this.userDetails.id]);
  }
  showPhotos(): void {
    this.route.navigate([`${this.users}/photos`, this.userDetails.id]);
  }
}
