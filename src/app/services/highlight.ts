import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const text = this.el.nativeElement.textContent;
    if (text.includes('a')) {
      const modifiedText = text.replace(/(a)/g, '<span class="highlighted">$1</span>');
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', modifiedText);
    }
  }
}
