import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Output() sidebarOpen = new EventEmitter<boolean>();

  public isSidebarOpen = false;
  public selectedMenuItem = 'User List';
  public readonly date = new Date('2020-09-23');
  public menuItems = [
    { name: 'User List' },
    { name: 'User Edit' },
    { name: 'Roles and Permissions' },
    { name: 'Settings' },
  ];

  screenMdWidth = parseFloat(
    getComputedStyle(document.body).getPropertyValue('--screen-md')
  );

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < this.screenMdWidth) {
      this.isSidebarOpen = false;
      this.sidebarOpen.emit(this.isSidebarOpen);
    }
  }

  public onToggleSidebarClick(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarOpen.emit(this.isSidebarOpen);
  }

  // public onMenuClick(): void {
  //   this.isActive = !this.isActive;
  // }

  public onMenuItemClick(newValue: string): void {
    this.selectedMenuItem = newValue;
  }
}
