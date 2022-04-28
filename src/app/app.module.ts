import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { CardItemComponent } from './cards/cards-list/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ButtonComponent,
    CardsComponent,
    CardsListComponent,
    CardItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
