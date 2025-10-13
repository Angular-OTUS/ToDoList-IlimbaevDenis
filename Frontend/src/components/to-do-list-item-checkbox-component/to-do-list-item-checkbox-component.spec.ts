import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListItemCheckboxComponent } from './to-do-list-item-checkbox-component';

describe('ToDoListItemCheckboxComponent', () => {
  let component: ToDoListItemCheckboxComponent;
  let fixture: ComponentFixture<ToDoListItemCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListItemCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListItemCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
