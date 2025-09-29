import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  linkedSignal,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoList } from '../index';
import { ToDoListDescriptionChangeComponent } from '../components/to-do-list-description-change-component/to-do-list-description-change-component';
import { ToDoListToastComponent } from '../components/to-do-list-toast-component/to-do-list-toast-component';
import { ToastService } from '../services/toast-service';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskServices } from '../services/get-tasks-services';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToDoList,
    ToDoListDescriptionChangeComponent,
    ToDoListToastComponent,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  filterOption?: number;

  get filterOptionNormal(): string {
    return this.filterOption == 1 ? 'Progress' : 'Completed';
  }

  toastService = inject(ToastService);
  listService = inject(TaskServices);
  readonly toDoListComponent = viewChild(ToDoList);

  readonly tasks = linkedSignal(() => this.toDoListComponent()?.tasks());

  readonly selectedItemId = computed(() => this.toDoListComponent()!.selectedItemId());

  protected readonly title = signal('toDoListApp');

  clickOnRadioButton() {
    this.toDoListComponent()?.rerender();
  }

  updateDescription(descriptionArg: string): void {
    this.tasks.update((arr) =>
      this.listService.updateElProp(arr!, this.selectedItemId(), 'description', descriptionArg),
    );
    this.toastService.addToast(`Change desc element id: ${this.selectedItemId()}`);
  }
}
