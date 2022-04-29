
import { Action } from "@ngrx/store";
import { Card } from "../cards-list/card-item/card.model";

export type CardActions = 
    | AddTodo
    | DeleteTodo;

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor (public payload: Card){}
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
    constructor (public payload: number) {}
}