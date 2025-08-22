import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToDoList } from "../components/to-do-list/to-do-list";
@Component({
  selector: "app-root",
  imports: [RouterOutlet, ToDoList],
  templateUrl: "./app.html",
  styleUrl: "./app.css",

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal("toDoListApp");
}
