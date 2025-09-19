import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  input,
  linkedSignal,
  model,
  OnInit,
  output,
  OutputEmitterRef,
  signal,
} from '@angular/core';
import { ToDoButtonComponent } from '../to-do-button-component/to-do-button-component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MyTooltip } from '../../directives/my-tooltip/my-tooltip';
import { TooltipStyleConfig } from '../../directives/my-tooltip/types/tooltip-style-config';
import { MyTask, ToDoListService } from '../../services/to-do-list-list-service';
@Component({
  selector: 'app-to-do-list-item-component',
  imports: [
    ToDoButtonComponent,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MyTooltip,
  ],
  templateUrl: './to-do-list-item-component.html',
  styleUrl: './to-do-list-item-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItemComponent {
  newTitle = '';
  titleIsChange = linkedSignal(() => this.sharedId() !== this.taskId());
  toDoList = inject(ToDoListService);
  stylesForButton = {
    width: '100px',
    height: '100px',
    'background-color': '#f5535e',
    color: 'white',
  };
  stylesForButtonChangeTitle = {
    width: '65px',
    height: '60px',
    'background-color': '#91415bff',
    color: 'white',
  };
  readonly list = input.required<MyTask[]>();
  readonly textDiscriprion = linkedSignal(() => this.toDoList.tasks()[this.sharedId()].description);
  readonly taskId = model.required<number>();
  readonly sharedId = model.required<number>();
  readonly textTask = model.required<string | undefined>();
  readonly tasksChange: OutputEmitterRef<number> = output();
  deleteTask(): void {
    this.tasksChange.emit(this.taskId());
  }
  changeTitle(): void {
    if (this.newTitle === null || this.newTitle.trim() === '') return;
    this.toDoList.updateElProp(this.sharedId(), 'text', this.newTitle);
    this.titleIsChange.set(true);
  }
  get tooltipStyles(): TooltipStyleConfig {
    return {
      'background-color': 'black',
      border: '5px inset #2C2057',
      'border-radius': '14px 14px 14px 0',
      color: 'white',
      'font-family': 'arial',
      'font-size': '14px',
      'font-weight': 'bold',
    };
  }
}
