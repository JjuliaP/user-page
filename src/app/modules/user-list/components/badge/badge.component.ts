import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() name: string = '';
  @Input() color: 'grey' | 'red' | 'green' | 'blue' = 'blue';
  @Input() control!: AbstractControl;

  public onBadgeClick(): void {
    this.control.setValue(!this.control.value);
  }
}
