import {
  ChangeDetectionStrategy,
  Component,
  model,
  output,
  OutputEmitterRef,
} from "@angular/core";
import { ToDoButtonComponent } from "../to-do-button-component/to-do-button-component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-to-do-list-item-component",
  imports: [ToDoButtonComponent, CommonModule],
  templateUrl: "./to-do-list-item-component.html",
  styleUrl: "./to-do-list-item-component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItemComponent {
  readonly taskId = model.required<number>();
  readonly textTask = model.required<string | null>();
  readonly tasksChange: OutputEmitterRef<number> = output();

  deleteTask(): void {
    this.tasksChange.emit(this.taskId());
  }
}
