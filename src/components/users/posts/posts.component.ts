import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../../shared/interfaces/posts/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  id!: string;
  allpost!: Posts[];
  errorMessage!: string;
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.activateRoute.data.subscribe(({ postsDate }) => {
      this.allpost = postsDate;
    });
  }
}
