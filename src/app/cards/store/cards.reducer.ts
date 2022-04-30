import { Card } from "../cards-list/card-item/card.model";
import * as Actions from './cards.actions';

export interface State {
	editIndex: number,
	cards: Card[]
}

const initialState: State = {
	editIndex: -1,
	cards: [
		new Card('Do something...', 9)
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
				editIndex: -1,
				cards: state.cards.filter((card, index) => {
					return action.payload !== index;
				})
			}
		case Actions.SET_EDIT_MODE:		
			return {
				...state,
				editIndex: action.payload
			}
		case Actions.INCREMENT_PRIORITY:
			return {
				...state,
				cards: state.cards.map((card, i) => 
					state.editIndex === i 
					? { ...card, priority: card.priority + 1 } 
					: card
				)
			}
		case Actions.DECREMENT_PRIORITY:
			return {
				...state,
				cards: state.cards.map((card, i) => 
				state.editIndex === i 
				? { ...card, priority: card.priority - 1 }
				: card
				)
			}
		case Actions.ADD_TODOS:
			return {
				...state,
				cards: action.payload 
			}
		default:
			return state;
	}
}