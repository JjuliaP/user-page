import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DatePipe, CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Output() sidebarOpen = new EventEmitter<boolean>();

  public isSidebarOpen = true;
  public selectedMenuItem = 'User List';
  public readonly date = new Date('2020-09-23');
  public menuItems = [
    { name: 'User List', link: 'user-list' },
    { name: 'User Edit', link: 'user-edit' },
    { name: 'Roles and Permissions', link: 'roles' },
    { name: 'Settings', link: 'settings' },
  ];

  private screenMdWidth = parseFloat(
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

  public onMenuItemClick(newValue: string): void {
    this.selectedMenuItem = newValue;
  }
}
