import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Key } from '../key.model';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnChanges {
  @Input() word: string;
  @Input() guesses: string[] = [];

  characters: Key[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['word'] && changes['word'].currentValue && (changes['word'].currentValue !== changes['word'].previousValue)) {
      this.characters = this.word.split('').map((char) => ({ value: char, guessed: false }));
    }
    if (changes['guesses'].currentValue && changes['guesses'].currentValue.length && changes['guesses'].currentValue !== changes['guesses'].previousValue) {
      const guessedChar = [...changes['guesses'].currentValue].pop();
      this.characters = this.characters.map(char => {
        if (char.value.toLocaleLowerCase() === guessedChar.toLocaleLowerCase()) {
          return { ...char, guessed: true };
        }
        return char;
      })
    }
  }
}
