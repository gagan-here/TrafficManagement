import { Component } from '@angular/core';
import { ButonComponent } from "../shared/buton/buton.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
