import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'CharacterItem',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {

  @Input() character: any;
  constructor() { }

  ngOnInit(): void {
  }

}
