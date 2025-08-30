import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-to-do-list",
  imports: [FormsModule],
  templateUrl: "./to-do-list.html",
  styleUrl: "./to-do-list.css",
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoList {
  article: string | null = null;

  readonly tasks = signal([
    { id: 0, text: "Buy a new gaming laptop" },
    { id: 1, text: "Complete previous task" },
    { id: 2, text: "Create some angular app" },
  ]);
  addTask(): void {
    if (this.article === null || this.article.trim() === "") {
      return;
    }
    this.tasks.push({ id: this.tasks.length, text: this.article });
  }
  deleteTask(id: number): void {
    this.tasks.splice(id, 1);
  }
}
interface MyTask {
  id: number;
  text: string;
}
