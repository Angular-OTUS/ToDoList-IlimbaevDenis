import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoHeader } from './to-do-header';

describe('ToDoHeader', () => {
  let component: ToDoHeader;
  let fixture: ComponentFixture<ToDoHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
