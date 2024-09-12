import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photos } from '../../../shared/interfaces/photos/photos';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
})
export class PhotosComponent implements OnInit {
  allPhotos!: Photos[];
  errorMessage?: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos(): Subscription {
    return this.route.data.subscribe(({ photoDate }) => {
      this.allPhotos = photoDate;
    });
  }
}
