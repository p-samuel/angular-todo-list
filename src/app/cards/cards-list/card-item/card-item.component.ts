import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { Card } from './card.model';
import * as AppReducer from '../../../store/app.reducer';
import * as CardActions from '../../store/cards.actions';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card | undefined;
  @Input() index: number = 0;
  faDelete = faDeleteLeft;

  constructor(private store: Store<AppReducer.AppState>) { }

  ngOnInit() {}

  delete(){
    this.store.dispatch(new CardActions.DeleteTodo(this.index))
  }

  increment() {
    this.store.dispatch(new CardActions.SetEditMode(this.index));
    this.store.dispatch(new CardActions.IncrementPriority());
  }

  decrement(event: MouseEvent) {
    event.preventDefault();
    this.store.dispatch(new CardActions.SetEditMode(this.index));
    this.store.dispatch(new CardActions.DecrementPriority())
  }

}
