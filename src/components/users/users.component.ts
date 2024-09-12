import { Component, OnInit } from '@angular/core';
import { GetusersService } from '../../shared/services/get/getusers/getusers.service';
import { Users } from '../../shared/interfaces/user/users';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { ErrorRequestComponent } from '../error-request/error-request.component';
import { OddorevenDirective } from '../../shared/directives/oddoreven.directive';
import { ButtonServicesComponent } from '../button-services/button-services.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from '../loader/loader.component';
import { Title } from '@angular/platform-browser';
import { IsloadingDirective } from '../../shared/directives/isloading.directive';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgFor,
    ErrorRequestComponent,
    NgIf,
    OddorevenDirective,
    TitleCasePipe,
    ButtonServicesComponent,
    TranslateModule,
    LoaderComponent,
    IsloadingDirective,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  allUsers!: Users[];
  errorMessage!: string;
  constructor(private getUsers: GetusersService, private title: Title) {
    this.title.setTitle('Users');
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(): Subscription {
    return this.getUsers.getUsers<Users[]>().subscribe(
      (users) => {
        this.allUsers = users;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
