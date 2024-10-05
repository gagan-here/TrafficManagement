import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit{
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild<ElementRef<HTMLElement | HTMLTextAreaElement>>('input')
  
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  
  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());

  }
}
