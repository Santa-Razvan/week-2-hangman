import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit, OnChanges {
  @Input() guesses: string[] = [];
  @Input() word: string;
  @Output() gameFinished = new EventEmitter<boolean>();

  mistakes: number = 6;
  mistakesRemaining: number;
  incorrectGuesses: number;
  success: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.mistakesRemaining = this.mistakes;
    this.incorrectGuesses = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['word'] && changes['word'].currentValue && (changes['word'].currentValue !== changes['word'].previousValue)) {
      this.mistakesRemaining = this.mistakes;
      this.incorrectGuesses = 0;
      this.success = false;
    }
    if (changes['guesses'].currentValue && changes['guesses'].currentValue.length && changes['guesses'].currentValue !== changes['guesses'].previousValue) {
      const char = [...changes['guesses'].currentValue].pop();
      this.checkGuess(char);
    }
  }

  checkGuess(letter: string) {
    let win = true;
    if (this.matchGuess(letter)) {
      this.mistakesRemaining--;
      this.incorrectGuesses++;
    }
    for (let i = 0; i < this.word.length; i++) {
      if (!this.guesses.find(guess => guess.toLocaleLowerCase() === this.word[i].toLocaleLowerCase())) {
        win = false;
        break;
      }
    }
    this.success = win;
    if (this.success || this.mistakesRemaining === 0) {
      this.gameFinished.emit(this.success);
    }
    console.log(this.mistakesRemaining);
  }

  matchGuess(letter: string) {
    const match = this.word.match(new RegExp(letter, 'gi'));
    return match ? 0 : 1;
  }
}
