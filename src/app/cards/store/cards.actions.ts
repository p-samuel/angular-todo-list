
import { Action } from "@ngrx/store";
import { Card } from "../cards-list/card-item/card.model";

export type CardActions = 
    | AddTodo
    | DeleteTodo
    | IncrementPriority
    | SetEditMode
    | DecrementPriority;

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_EDIT_MODE = 'SET_EDIT_MODE';
export const INCREMENT_PRIORITY = 'INCREMENT_PRIORITY';
export const DECREMENT_PRIORITY = 'DECREMENT_PRIORITY';

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor (public payload: Card){}
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
    constructor (public payload: number) {}
}

export class IncrementPriority implements Action {
    readonly type = INCREMENT_PRIORITY; 
}

export class SetEditMode implements Action {
    readonly type = SET_EDIT_MODE;
    constructor (public payload: number){}
}

export class DecrementPriority implements Action {
    readonly type = DECREMENT_PRIORITY;
}