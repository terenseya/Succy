import { Component, Input, ViewChildren, QueryList, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'tinder-ui',
  templateUrl: 'tinder-ui.component.html',
  styleUrls: ['tinder-ui.component.scss'],
})
export class TinderUIComponent {

  @Input('cards') cards: Array<{
    title: string,
    one: string,
    two: string,
    three: string,
    four: string,
    five: string,

  }>;

  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  @Output() choiceMade = new EventEmitter();

  moveOutWidth: number;
  shiftRequired: boolean;
  transitionInProgress: boolean;


  constructor(private renderer: Renderer2) { 
  }

  one(event, one){
    event.preventDefault();
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)');
    this.shiftRequired = true;
    this.transitionInProgress = true;
  }

  two(event, two){
    event.preventDefault();
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)');
    this.shiftRequired = true;
  }

  three(event, three){
    event.preventDefault();
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)');
    this.shiftRequired = true;
  }

  four(event, four){
    event.preventDefault();
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)');
    this.shiftRequired = true;
  }

  five(event, five){
    event.preventDefault();
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)');
    this.shiftRequired = true;
  }


  handleShift() {
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
    };
  };

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(()=>{
      this.tinderCardsArray = this.tinderCards.toArray();
    })
  };

}