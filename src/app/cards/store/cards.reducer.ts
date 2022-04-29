import { Card } from "../cards-list/card-item/card.model";
import * as Actions from './cards.actions';

export interface State {
	cards: Card[]
}

const initialState: State = {
	cards: [
    new Card('Clean my bedbroom', 20),
    new Card('Make my lunch', 4),
    new Card('Cook noodles for lunch', 14)	
	]
}

export function cardReducer(state: State = initialState, action: Actions.CardActions): State {
	switch (action.type) {
		case Actions.ADD_TODO:
			return {
				...state,
				cards: state.cards.concat(action.payload),
			}
		case Actions.DELETE_TODO: 
			return {
				...state,
				cards: state.cards.filter((card, index) => {
					return action.payload !== index;
				})
			}
		default:
			return state;
	}
}