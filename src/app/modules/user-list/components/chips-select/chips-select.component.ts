import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChipOption } from '../../../../interfaces/chip-option.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chips-select',
  templateUrl: './chips-select.component.html',
  styleUrls: ['./chips-select.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChipsSelectComponent,
    },
  ],
})
export class ChipsSelectComponent implements ControlValueAccessor {
  @Input({ required: true }) options: ChipOption[] = [];
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('dropdownOption') dropdownOption!: ElementRef<HTMLDivElement>;

  public selectedOptions: ChipOption[] = [];
  public dropdownOpen: boolean = false;

  private onChange = (options: ChipOption[]) => {};
  private onTouched = () => {};

  public toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  public selectOption(option: ChipOption): void {
    const optionIndex = this.selectedOptions.indexOf(option);
    if (optionIndex > -1) {
      this.selectedOptions.splice(optionIndex, 1);
    } else {
      this.selectedOptions.push(option);
    }

    this.onChange(this.selectedOptions);
    this.dropdownOpen = false;
  }

  public isOptionSelected(option: ChipOption): boolean {
    return this.selectedOptions.includes(option);
  }

  public removeChip(option: ChipOption): void {
    const index = this.selectedOptions.indexOf(option);
    if (index > -1) {
      this.selectedOptions.splice(index, 1);
    }
  }

  // CVA methods
  public writeValue(options: ChipOption[]) {
    this.selectedOptions = options;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
