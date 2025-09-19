import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoList } from '../index';
import { ToDoListDescriptionChangeComponent } from '../components/to-do-list-description-change-component/to-do-list-description-change-component';
import { ToDoListService } from '../services/to-do-list-list-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoList, ToDoListDescriptionChangeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  toDoList = inject(ToDoListService);

  readonly toDoListComponent = viewChild(ToDoList);

  readonly selectedItemId = computed(() => this.toDoListComponent()!.selectedItemId());

  protected readonly title = signal('toDoListApp');
}
