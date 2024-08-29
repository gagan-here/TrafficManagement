import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [ButonComponent],
  templateUrl: './buton.component.html',
  styleUrl: './buton.component.css'
})
export class ButonComponent {

}
