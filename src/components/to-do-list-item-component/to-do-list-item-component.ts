import {
  ChangeDetectionStrategy,
  Component,
  model,
  output,
  OutputEmitterRef,
} from "@angular/core";

@Component({
  selector: "app-to-do-list-item-component",
  imports: [],
  templateUrl: "./to-do-list-item-component.html",
  styleUrl: "./to-do-list-item-component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItemComponent {
  readonly taskId = model.required<number>();
  readonly textTask = model.required<string | null>();
  readonly tasksChange: OutputEmitterRef<number> = output();
  deleteTask(id: number): void {
    this.tasksChange.emit(id);
  }
}
