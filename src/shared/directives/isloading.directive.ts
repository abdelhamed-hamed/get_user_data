import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsloading]',
  standalone: true,
})
export class IsloadingDirective {
  constructor(
    private element: TemplateRef<HTMLElement>,
    private view: ViewContainerRef
  ) {}
  @Input() set(isLoading: boolean) {
    if (isLoading) {
      this.view.createEmbeddedView(this.element.elementRef.nativeElement);
    } else {
      this.view.clear();
    }
  }
}
