import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToDoList } from "../index";

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
