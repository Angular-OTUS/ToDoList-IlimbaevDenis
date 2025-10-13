import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDescriptionChangeComponent } from './to-do-list-description-change-component';

describe('ToDoListDescriptionChangeComponent', () => {
  let component: ToDoListDescriptionChangeComponent;
  let fixture: ComponentFixture<ToDoListDescriptionChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListDescriptionChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListDescriptionChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
