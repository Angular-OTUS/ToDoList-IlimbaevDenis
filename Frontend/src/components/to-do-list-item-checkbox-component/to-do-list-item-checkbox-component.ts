import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-to-do-list-item-checkbox-component',
  imports: [],
  templateUrl: './to-do-list-item-checkbox-component.html',
  styleUrl: './to-do-list-item-checkbox-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItemCheckboxComponent {

  translate = inject(TranslateService);

  checkTask = false;

  readonly statusTaskChange = output<boolean>();

  changeStatus(): void {
    this.checkTask = !this.checkTask;
    console.log("Change status")
    this.statusTaskChange.emit(this.checkTask);
  }
}
