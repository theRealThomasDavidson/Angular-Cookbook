import { Directive, Input, SimpleChanges, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{
  @Input() highlightText=""
  @Input() highlightColor="teal"
  originalHTML = ''

  constructor(private el: ElementRef) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.highlightText.firstChange){
      this.originalHTML = this.el.nativeElement.innerHTML
      return;
    }
    const { currentValue } = changes.highlightText
    console.log(currentValue)
    if (currentValue){
      const regEx = new RegExp(`(${currentValue})`,"gi")
      this.el.nativeElement.innerHTL =this.originalHTML.replace(
      regEx, `<span style="background-color: ${this.highlightColor}">\$1</span>`)
    }else {
      this.el.nativeElement.innerHTML = this.originalHTML;
    }
  }
}
