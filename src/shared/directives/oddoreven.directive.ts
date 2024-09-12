import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOddoreven]',
  standalone: true,
})
export class OddorevenDirective implements OnInit {
  constructor(private element: ElementRef, private render: Renderer2) {}
  @Input('appOddoreven') appOddoreven!: number;
  ngOnInit(): void {
    if (this.appOddoreven % 2 == 0)
      this.render.addClass(this.element.nativeElement, 'bg-danger-subtle');
    else this.render.addClass(this.element.nativeElement, 'bg-primary-subtle');
  }
}
