import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Card } from './card-item/card.model';
import * as AppReducer from '../../store/app.reducer';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit{

  cards: Card[] = [];
  subscription: Subscription;

  constructor(private store: Store<AppReducer.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('cards')
    .pipe(map(cardsState =>  cardsState.cards))
    .subscribe((cards: Card[]) => {
      this.cards = cards;
    })
  }
}
