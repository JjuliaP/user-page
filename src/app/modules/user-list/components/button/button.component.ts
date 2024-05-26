import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: 'signal-error' | 'primary-y' | 'primary-bg' | 'primary-b' =
    'primary-b';

  @Output() buttonClickEvent = new EventEmitter<void>();

  public onButtonClick(): void {
    this.buttonClickEvent.emit();
  }
}
