import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.model';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card | undefined;
  @Input() index: number = 0;
  faDelete = faDeleteLeft;
  
  constructor() { }

  ngOnInit(): void {
  }

  click(){
    alert(`This is my id ${this.index}`)
  }

}
