import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = 'https://www.breakingbadapi.com/api/characters'

  constructor(private http: HttpClient) { }

  getData(name) {
    return this.http.get<any[]>(`${this.url}?name=${name}`);
  }
}
