import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChipOption } from '../../../../interfaces/chip-option.interface';
import { CommonModule } from '@angular/common';
import { ChipsSelectComponent } from '../chips-select/chips-select.component';
import { FileInputComponent } from '../file-input/file-input.component';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChipsSelectComponent,
    FileInputComponent,
  ],
})
export class FormSectionComponent {
  @Input() form!: FormGroup;
  public tab = 1;

  public countryOptions: ChipOption[] = [
    { name: 'Poland', id: 1 },
    { name: 'Germany', id: 2 },
    { name: 'USA', id: 3 },
    { name: 'UK', id: 4 },
    { name: 'France', id: 5 },
    { name: 'Spain', id: 6 },
    { name: 'China', id: 7 },
    { name: 'Japan', id: 8 },
  ];

  public clickTab(tabNumber: number): void {
    this.tab = tabNumber;
  }

  public onFileSelected(event: Event) {}
}
