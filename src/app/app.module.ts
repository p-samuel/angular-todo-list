import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { CardItemComponent } from './cards/cards-list/card-item/card-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/app.reducer';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

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
    SliderModule,
    CommonModule,
    BrowserModule, 
    FormsModule,
    FontAwesomeModule,
    StoreModule.forRoot(AppReducer),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
