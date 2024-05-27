import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
})
export class ModalComponent {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  public open(): void {
    this.dialog.nativeElement.showModal();
  }

  public close(): void {
    this.dialog.nativeElement.close();
  }
}
