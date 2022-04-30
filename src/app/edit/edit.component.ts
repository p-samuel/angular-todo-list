import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from '../cards/cards-list/card-item/card.model';
import * as State from '../store/app.reducer';
import * as CardActions from '../cards/store/cards.actions';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  
  priority: number = 5;
  text: string = '';
  @ViewChild('cardForm', { static: false }) cardForm: NgForm;

  constructor(private store: Store<State.AppState>) { }

  click(form: NgForm) {
    const cardForm = form.value;
    const card = new Card(cardForm.text, this.priority);
    this.store.dispatch(new CardActions.AddTodo(card))
    this.cardForm.reset()
  }

}
