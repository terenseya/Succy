import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {

  cards;

  constructor() {
    
    this.cards = [];

  }

  loadTinderCards() {
    this.cards = [
      {
        title: "Demo card 1",
        one: "This is a demo for Tinder like swipe cards",
        two: "This is a demo for Tinder like swipe cards",
        three: "This is a demo for Tinder like swipe cards",
        four: "This is a demo for Tinder like swipe cards",
        five: "This is a demo for Tinder like swipe cards"
      },
      {
        title: "Demo card 1",
        one: "This is a demo for Tinder like swipe cards",
        two: "This is a demo for Tinder like swipe cards",
        three: "This is a demo for Tinder like swipe cards",
        four: "This is a demo for Tinder like swipe cards",
        five: "This is a demo for Tinder like swipe cards"
      },
    ]
  };

}
