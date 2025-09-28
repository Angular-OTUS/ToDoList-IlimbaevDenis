import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListToastComponent } from './to-do-list-toast-component';

describe('ToDoListToastComponent', () => {
  let component: ToDoListToastComponent;
  let fixture: ComponentFixture<ToDoListToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
