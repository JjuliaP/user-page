import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input() name: string = '';
  @Input() color: 'grey'|'red'|'green'|'blue' = 'blue';


}