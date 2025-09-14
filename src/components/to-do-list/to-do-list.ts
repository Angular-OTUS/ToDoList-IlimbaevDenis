import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostBinding,
  inject,
  model,
  OnInit,
  signal,
  WritableSignal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Extensions, MyTask } from "./to-do-list-helper";
import { ToDoListItemComponent } from "../to-do-list-item-component/to-do-list-item-component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { CommonModule } from "@angular/common";
import { ToDoButtonComponent } from "../to-do-button-component/to-do-button-component";
import { EnterControl } from "../../directives/enter-control-directive/enter-control";
import {ScrollingModule} from '@angular/cdk/scrolling'
@Component({
  selector: "app-to-do-list",
  imports: [
    FormsModule,
    ToDoListItemComponent,
    ToDoButtonComponent,
    MatInputModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    CommonModule,
    EnterControl,
    ScrollingModule
  ],
  templateUrl: "./to-do-list.html",
  styleUrl: "./to-do-list.css",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToDoList implements OnInit{
  article: string | undefined = "";
  stylesForButton = {'width': '200px', 'height': '100px', 'background-color': '#4fc26e', 'color': 'white'}
  readonly description = model<string>();
  readonly selectedItemId = signal<number>(0);
  readonly isLoading = signal<boolean>(true);
  readonly tasks: WritableSignal<MyTask[]> = signal<MyTask[]>([
    { id: 0, text: "Buy a new gaming laptop", description: "Tomorrow" },
    { id: 1, text: "Complete previous task", description: "Now" },
    { id: 2, text: "Create some angular app", description: "Test" },
  ]);
  private spinner = inject(NgxSpinnerService);
   ngOnInit(): void {
    this.spinner.show();
     setTimeout(() => {
      this.spinner.hide();
      this.isLoading.set(false);
    }, 500)
  }
  
  addTask(): void {
    if (this.article === null || this.article?.trim() === "") {
      return;
    }
    this.tasks.update((arr) =>
      Extensions.addNewEl(arr, {
        id: this.tasks().length,
        text: this.article,
        description: this.description()
      }),
    );
  }
  deleteTask(id: number): void {
    this.tasks.update((arr) => Extensions.delNewEl(arr, id));
  }
  
  selectId(id: number): void{
    this.selectedItemId.set(id);
  }
}



