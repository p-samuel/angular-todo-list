import { animate, style, transition, trigger } from "@angular/animations";

export const itemInOut = trigger('itemInOut', [
  transition('void => *', [
    style({ 'opacity': 0, transform: 'translateY(-10px)'}),
    animate('300ms ease-out')
  ])
]);