import { Component, OnInit } from '@angular/core';
import { Card } from './card-item/card.model';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {

  cards: Card[] = []

  constructor() { }
}
