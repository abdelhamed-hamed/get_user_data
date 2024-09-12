import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-request',
  standalone: true,
  imports: [],
  templateUrl: './error-request.component.html',
  styleUrl: './error-request.component.scss',
})
export class ErrorRequestComponent {
  @Input({ required: true }) errorMessage!: string;
}
