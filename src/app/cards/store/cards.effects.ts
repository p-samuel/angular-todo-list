import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs";
import { Store } from "@ngrx/store";
import * as CardActions from './cards.actions';
import * as State from '../../store/app.reducer';
import { Card } from "../cards-list/card-item/card.model";

@Injectable()
export class CardEffects {

  saveTodos = createEffect(() => {
    return this.actions.pipe(
      ofType(CardActions.SAVE_TODOS),
      tap((cardAddAction: CardActions.SaveTodos) => {
        localStorage.setItem('todos', JSON.stringify(cardAddAction.payload))
      })
    )
  }, { dispatch: false })

  loadTodos = createEffect(() => {
    return this.actions.pipe(
      ofType(CardActions.LOAD_TODOS),
      map(() => {
        const todos: Card[] = JSON.parse(localStorage.getItem('todos') || '[]');
        return todos;
      }),
      map(todos => {
        return new CardActions.AddTodos(todos)
      })
    )
  })


  constructor(private actions: Actions,
              private store: Store<State.AppState>) {}

}