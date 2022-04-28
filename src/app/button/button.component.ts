import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  public caption = 'BUTTON';
  
  @Input()
  set text(name: string) {
    this.caption = name.toUpperCase();
  }

  get name(): string {
    return this.caption;
  }
  
  @Input() type: string = 'button';
  @Output() buttonClick = new EventEmitter();
  @Input() isDisabled = false;

  constructor() { }

  onClick(){
    this.buttonClick.emit()
  }

}
