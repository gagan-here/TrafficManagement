import { AfterViewChecked, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewChecked {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  
  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);

    this.form?.nativeElement.reset()
  }
}
