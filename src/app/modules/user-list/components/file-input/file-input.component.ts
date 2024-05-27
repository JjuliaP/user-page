import { CommonModule } from '@angular/common';
import { Component, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    },
  ],
})
export class FileInputComponent implements ControlValueAccessor {
  public files: File[] = [];
  public isDragOver = false;
  public pluralMap = {
    '=0': 'files',
    '=1': 'file',
    other: 'files',
  };

  private onChange = (files: File[]) => {};

  private onTouched = () => {};

  public onFileInputChange(fileList: FileList | undefined): void {
    this.files.push(...(fileList ? Array.from(fileList) : []));

    this.onChange(this.files);
  }

  public onFileRemoveClick(file: File): void {
    const index = this.files.indexOf(file);
    this.files.splice(index, 1);
    this.onChange(this.files);
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    const fileList = event.dataTransfer?.files;
    this.onFileInputChange(fileList);
  }

  // CVS methods
  public writeValue(value: File[]): void {
    this.files = value;
  }

  public registerOnChange(fn: (file: File[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
