import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HangmanComponent } from './hangman/hangman.component';
import { WordComponent } from './word/word.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { HangmanContainerComponent } from './hangman-container/hangman-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    WordComponent,
    KeyboardComponent,
    HangmanContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
