import { Component } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButonComponent } from '../../../shared/buton/buton.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
  }

}
