import { Component } from '@angular/core';

@Component({
  selector: 'app-roles-section',
  templateUrl: './roles-section.component.html',
  styleUrl: './roles-section.component.scss'
})
export class RolesSectionComponent {
  public tab = 2;

  public permissionItems = [
    {
      name:'Script'
    },
    {
      name:'Props'
    },
    {
      name:'Screens'
    },
    {
      name:'Money'
    },
    {
      name:'Stunt'
    },
  ]

  public clickTab(tabNumber: number): void{
    this.tab = tabNumber;
  }


}
