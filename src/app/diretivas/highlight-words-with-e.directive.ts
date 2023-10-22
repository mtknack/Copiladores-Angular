import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightWordsWithE]'
})
export class HighlightWordsWithEDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input') onInput() {
    const words: string[] = this.el.nativeElement.value.split(' ');
    const highlightedWords: string[] = words.map((word: string) => {
      if (word.toLowerCase().includes('abcd')) {
        console.log(word)
        return `<span class="highlighted">${word}</span>`;
      }
      return word;
    });
    this.el.nativeElement.innerHTML = highlightedWords.join(' ');
  }
}
