import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  model,
  output,
  OutputEmitterRef,
  signal,
} from "@angular/core";
import { ToDoButtonComponent } from "../to-do-button-component/to-do-button-component";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: "app-to-do-list-item-component",
  imports: [ToDoButtonComponent, CommonModule, MatInputModule, MatFormFieldModule, FormsModule, 
    MatInputModule, MatTooltipModule],
  templateUrl: "./to-do-list-item-component.html",
  styleUrl: "./to-do-list-item-component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItemComponent {
  classTooltip = ".my-custom-tooltip";
  stylesForButton = {'width': '100px', 'height': '100px', 'background-color': '#f5535e', 'color': 'white'}
  readonly  textDiscriprion = input<string>(); 
  readonly sharedId = model.required<number>();
  readonly taskId = model.required<number>();
  readonly textTask = model.required<string | undefined>();
  readonly tasksChange: OutputEmitterRef<number> = output();
  deleteTask(): void {
    this.tasksChange.emit(this.taskId());
  }
  
}
