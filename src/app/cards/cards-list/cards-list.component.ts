import { Component, OnInit } from '@angular/core';
import { Card } from './card-item/card.model';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {

  cards: Card[] = [
    new Card('Clean my bedbroom', 20),
    new Card('Make my lunch', 4),
    new Card('Cook noodles for lunch', 14)
  ]

  constructor() { }
}
