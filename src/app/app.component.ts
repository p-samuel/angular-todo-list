import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as State from './store/app.reducer';
import * as CardActions from './cards/store/cards.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'angular-todo-list';

  ngOnInit(): void {
    this.store.dispatch(new CardActions.LoadTodos())
  }

  constructor(private store: Store<State.AppState>){}
}
