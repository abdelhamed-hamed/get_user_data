import { Component } from '@angular/core';
import { IsloadingDirective } from '../../shared/directives/isloading.directive';
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [IsloadingDirective],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {}
