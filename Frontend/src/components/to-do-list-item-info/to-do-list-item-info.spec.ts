import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListItemInfo } from './to-do-list-item-info';

describe('ToDoListItemInfo', () => {
  let component: ToDoListItemInfo;
  let fixture: ComponentFixture<ToDoListItemInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListItemInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListItemInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
