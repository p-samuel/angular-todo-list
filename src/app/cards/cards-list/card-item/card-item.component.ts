import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card | undefined;
  @Input() index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
