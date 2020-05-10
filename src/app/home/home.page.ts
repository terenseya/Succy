import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AngularFireFunctions } from '@angular/fire/functions'
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {

  cards;

  constructor(private aff: AngularFireFunctions, private afs: AngularFirestore, private user: UserService, private question: QuestionService) {
    
    this.cards = [];

  }

  ngOnInit() {
     this.cards = [
      {
        title: "How many options we have?",
        one: "1: one",
        two: "2: two",
        three: "3: three",
        four: "4: four",
        five: "5: five"
      },
      ]
  };
}
