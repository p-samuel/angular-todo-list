import * as fromCard from '../cards/store/cards.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    cards: fromCard.State
}

export const AppReducer: ActionReducerMap<AppState, any> = {
    cards: fromCard.cardReducer,
}