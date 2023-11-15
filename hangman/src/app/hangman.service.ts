import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  word: string = '';
  words: string[] = ['car', 'bat', 'like', 'red', 'yellow', 'smoke', 'man', 'nail', 'hammer', 'shop',
    'green', 'orange', 'cat', 'dog', 'button', 'ink', 'giraffe', 'spider', 'tiger', 'lion', 'sheep',
    'sleep', 'love', 'ring', 'welcome', 'event', 'party', 'movie', 'scream', 'scary', 'lonely', 'song',
    'artist', 'year', 'release', 'sport', 'basket', 'snow'];

  constructor() { }

  getWord() {
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
    return this.word;
  }
}
