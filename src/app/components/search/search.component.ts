import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query = '';
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(e) {
    // console.log(this.query)
    this.notify.emit(this.query)
  }
}
