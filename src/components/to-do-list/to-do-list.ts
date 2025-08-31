import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
  WritableSignal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Extensions } from "../../app/extensions";
import { ToDoListItemComponent } from "../to-do-list-item-component/to-do-list-item-component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
@Component({
  selector: "app-to-do-list",
  imports: [
    FormsModule,
    ToDoListItemComponent,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: "./to-do-list.html",
  styleUrl: "./to-do-list.css",
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoList {
  article: string | null = null;

  readonly tasks: WritableSignal<MyTask[]> = signal<MyTask[]>([
    { id: 0, text: "Buy a new gaming laptop" },
    { id: 1, text: "Complete previous task" },
    { id: 2, text: "Create some angular app" },
  ]);
  addTask(): void {
    if (this.article === null || this.article.trim() === "") {
      return;
    }
    this.tasks.update((arr) =>
      Extensions.addNewEl<MyTask>(arr, {
        id: this.tasks().length,
        text: this.article,
      }),
    );
  }
  deleteTask(id: number): void {
    this.tasks.update((arr) => Extensions.delNewEl<MyTask>(arr, id));
  }
}
interface MyTask {
  id: number;
  text: string | null;
}
