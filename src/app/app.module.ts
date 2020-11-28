import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CharacterGridComponent } from './components/character-grid/character-grid.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CharacterGridComponent,
    CharacterItemComponent,
    SpinnerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
