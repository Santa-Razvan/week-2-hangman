import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KEYS, Key } from '../key.model';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  @Input() word: string = '';
  @Output() keyPressed = new EventEmitter<string>();

  keys: Key[] = [];

  constructor() {
    this.keys = KEYS.split('').map(key => {
      return {
        value: key,
        guessed: false
      }
    })
  }

  onClickKey(key: Key) {
    if (key.guessed) {
      return;
    }
    key.guessed = true;
    this.keyPressed.emit(key.value);
  }
}
