import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appSwap]',
  standalone: false,
})
export class SwapDirective {
  @HostListener('click', ['$event'])
  onChange() {
    const selectFrom =
      this.elementRef.nativeElement.parentElement.querySelector(
        "select[name='from']",
      );
    const selectTo =
      this.elementRef.nativeElement.parentElement.querySelector(
        "select[name='to']",
      );

    // swap
    const temp = selectFrom.value;
    selectFrom.value = selectTo.value;
    selectTo.value = temp;

    selectFrom.dispatchEvent(new Event('change'));
    selectTo.dispatchEvent(new Event('change'));
  }

  private elementRef = inject(ElementRef);
}
