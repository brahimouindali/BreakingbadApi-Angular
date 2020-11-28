import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'CharacterGrid',
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.css']
})
export class CharacterGridComponent {

  isLoading = false;
  characters: any[] = [];

  constructor(private characterService: CharacterService) { }

  private _query;

  get query(): any {
    return this._query;
  }

  @Input()
  set query(val: any) {
    this._query = val;

    this.characterService.getData(this._query)
      .subscribe(res => {
        this.characters = res;
        this.isLoading = true;
      },
        err => {
          console.log(err)
        }
      )
  }

}
