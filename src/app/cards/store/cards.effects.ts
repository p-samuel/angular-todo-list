import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { ITodo, ITodoList } from "../cards.interfaces";
import * as CardActions from './cards.actions';

@Injectable()
export class CardEffects {

  saveTodos = createEffect(() => {
    return this.actions.pipe(
      ofType(CardActions.ADD_TODO),
      tap((cardAddAction: CardActions.AddTodo) => {
        const todos: ITodoList = JSON.parse(localStorage.getItem('todos') || '{}');       
        if (!todos.items) {
          todos.items = new Array(1);
        }
        const todo: ITodo = { ...cardAddAction.payload }
        todos.items.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
      })
    )
  }, { dispatch: false })

  constructor(private actions: Actions) {}

}