import { Directive, ElementRef } from '@angular/core';

// Highlight the host element or any InputElement in blue
@Directive({ selector: '[highlight], input' }) // tslint:disable-line:directive-selector
export class ContactHighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'powderblue';
  }
}
