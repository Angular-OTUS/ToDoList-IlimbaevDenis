import {
  ChangeDetectionStrategy,
  Component,
  computed,
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
import { ToDoListItemCheckboxComponent } 
from '../to-do-list-item-checkbox-component/to-do-list-item-checkbox-component';
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
    ToDoListItemCheckboxComponent,
  ],
  templateUrl: './to-do-list-item-component.html',
  styleUrl: './to-do-list-item-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItemComponent  {
  newTitle = '';
  stylesForButton = {
    width: '100px',
    height: '80px',
    'margin-top': '10px',
    'background-color': '#68339e',
    border: 'solid',
    'border-radius': '8px',
    'padding-bottom': '50px',
    'border-color': 'white',
    color: 'white',
  };
  stylesForButtonChangeTitle = {
    width: '100%',
    height: '80%',
    'margin-bottom': '30px',
    'background-color': '#91415bff',
    color: 'white',
    border: 'solid',
    'border-radius': '8px',
    'border-color': 'white',
  };
  readonly conditionForChangeTitle = model<boolean>(false);

  readonly isStart = model.required<boolean>();

  readonly textDiscriprion = input<string>();

  readonly taskId = model.required<number>();

  readonly sharedId = model.required<number>();

  readonly textTask = model<string>();

  readonly statusIsCompleted = input.required<boolean>();

  readonly needTooltip = input<boolean>(true);

  readonly visibleChanger = input<boolean>(true);

  readonly textTaskChange: OutputEmitterRef<string> = output();

  readonly statusTaskChange: OutputEmitterRef<boolean> = output();
  
  readonly tasksChange: OutputEmitterRef<number> = output();

  deleteTask(): void {
    this.tasksChange.emit(this.taskId());
  }
  changeText(): void {
    if (this.newTitle === null || this.newTitle.trim() === '') { return; }
    this.textTaskChange.emit(this.newTitle);
    this.endChange()
  }
  endChange(): void {
    this.conditionForChangeTitle.set(false);
  }
  changeStatus(status: boolean): void {
    this.statusTaskChange.emit(status);
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
