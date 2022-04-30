import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { ITodo, ITodoList } from "../cards.interfaces";
import * as CardActions from './cards.actions';

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

  constructor(private actions: Actions) {}

}