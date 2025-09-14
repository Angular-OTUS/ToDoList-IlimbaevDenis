import { ChangeDetectionStrategy, Component, computed, linkedSignal, signal, viewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToDoList } from "../index";
import { Extensions} from "../components/to-do-list/to-do-list-helper";
import { ToDoListDescriptionChangeComponent } 
from "../components/to-do-list-description-change-component/to-do-list-description-change-component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ToDoList, ToDoListDescriptionChangeComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class App {
 

  readonly toDoListComponent = viewChild(ToDoList);

  readonly tasks = linkedSignal(() => this.toDoListComponent()?.tasks())

  readonly selectedItemId = computed(() => this.toDoListComponent()!.selectedItemId())

  protected readonly title = signal("toDoListApp");

  updateDescription(descriptionArg: string): void{
    this.tasks.update((arr) => 
      Extensions.updateElProp(arr!, this.selectedItemId(), 'description', descriptionArg))
  }
}
