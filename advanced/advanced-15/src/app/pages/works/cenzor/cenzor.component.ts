import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  arrWord = [];
  stars: string;
  plHolderInput = 'word here...';
  badWord: string;
  isEmptyInp: boolean;
  words: string;
  colorBadWord = 'red';
  userText: string;
  plHolderArea = 'text here...';
  isEmptyArea: boolean;
  reg: RegExp;

  constructor() { }

  ngOnInit(): void {
  }

  checkBadWord(): void{
    if (this.badWord === undefined){
      this.plHolderInput = 'Please write a word';
      this.isEmptyInp = true;
    } else {
      this.arrWord.push(this.badWord);
      this.plHolderInput = 'word here...';
      this.isEmptyInp = false;
      this.words = this.arrWord.join(', ');
      this.badWord = undefined;
      this.userText = undefined;
    }
  }

  reset(): void{
    this.arrWord = [];
    this.words = '';
  }

  changeWord(word: string): string{
    this.stars = '*';
    return this.stars.repeat(word.length);
  }

  cenzor(): void{
    if (this.userText === undefined){
      this.plHolderArea = 'Please write a text!';
      this.isEmptyArea = true;
    } else {
      this.isEmptyArea = false;
      this.plHolderArea = 'text here...';
    }
    this.reg = RegExp(this.arrWord.join('|'), 'gi');
    const arr = this.userText.match(this.reg);
    for (const word of arr) {
      this.userText = this.userText.replace(word, this.changeWord(word));
    }
  }
}
