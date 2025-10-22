import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-to-do-list-item-checkbox-component',
  imports: [],
  templateUrl: './to-do-list-item-checkbox-component.html',
  styleUrl: './to-do-list-item-checkbox-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItemCheckboxComponent {
  checkTask = false;

  readonly statusTaskChange = output<boolean>();

  changeStatus(): void {
    this.checkTask = !this.checkTask;
    this.statusTaskChange.emit(this.checkTask);
  }
}
