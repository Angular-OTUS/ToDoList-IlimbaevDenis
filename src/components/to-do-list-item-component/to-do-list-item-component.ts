import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  input,
  linkedSignal,
  model,
  OnChanges,
  OnInit,
  output,
  OutputEmitterRef,
  signal,
  SimpleChanges,
} from '@angular/core';
import { ToDoButtonComponent } from '../to-do-button-component/to-do-button-component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MyTooltip } from '../../directives/my-tooltip/my-tooltip';
import { TooltipStyleConfig } from '../../directives/my-tooltip/types/tooltip-style-config';
import { ToDoListItemCheckboxComponent } from '../to-do-list-item-checkbox-component/to-do-list-item-checkbox-component';
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
export class ToDoListItemComponent {
  newTitle = '';
  titleIsChange = linkedSignal(() => this.sharedId() !== this.taskId());

  stylesForButton = {
    width: '100px',
    height: '50px',
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
  readonly textDiscriprion = input<string>();
  readonly taskId = model.required<number>();
  readonly sharedId = model.required<number>();
  readonly textTask = model.required<string>();
  readonly statusIsCompleted = input.required<boolean>();
  readonly textTaskChange: OutputEmitterRef<string> = output();
  readonly statusTaskChange: OutputEmitterRef<boolean> = output();
  readonly tasksChange: OutputEmitterRef<number> = output();
  deleteTask(): void {
    this.tasksChange.emit(this.taskId());
  }
  changeText(): void {
    if (this.newTitle === null || this.newTitle.trim() === '') return;
    this.titleIsChange.set(true);
    this.textTaskChange.emit(this.newTitle);
  }
  changeStatus(status: boolean) {
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
