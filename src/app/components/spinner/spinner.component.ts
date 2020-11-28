import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  spinner = '../../../assets/img/spinner.gif';
  constructor() { }
}
