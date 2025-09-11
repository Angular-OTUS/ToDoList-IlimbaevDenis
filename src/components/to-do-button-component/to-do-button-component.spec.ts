import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoButtonComponent } from './to-do-button-component';

describe('ToDoButtonComponent', () => {
  let component: ToDoButtonComponent;
  let fixture: ComponentFixture<ToDoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
