import { Component, OnInit } from '@angular/core';
import { HangmanService } from '../hangman.service';

@Component({
  selector: 'app-hangman-container',
  templateUrl: './hangman-container.component.html',
  styleUrls: ['./hangman-container.component.css']
})
export class HangmanContainerComponent implements OnInit {
  word: string;
  guesses: string[] = [];
  restartGame: boolean = false;

  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.word = this.hangmanService.getWord();
    console.log(this.word);
  }

  guessLetter(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return;
    }
    this.guesses = [... this.guesses, letter];
  }

  reset() {
    this.guesses = [];
    this.word = this.hangmanService.getWord();
    this.restartGame = !this.restartGame;
    console.log(this.word);
  }

  onGameFinished() {
    this.restartGame = true;
  }
}