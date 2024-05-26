import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesSectionComponent } from './roles-section.component';

describe('RolesSectionComponent', () => {
  let component: RolesSectionComponent;
  let fixture: ComponentFixture<RolesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RolesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
