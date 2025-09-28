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
  readonly textDiscriprion = input<string>();
  readonly taskId = model.required<number>();
  readonly sharedId = model.required<number>();
  readonly textTask = model.required<string>();
  readonly textTaskChange: OutputEmitterRef<string> = output();
  readonly tasksChange: OutputEmitterRef<number> = output();

  deleteTask(): void {
    this.tasksChange.emit(this.taskId());
  }
  changeText(): void {
    if (this.newTitle === null || this.newTitle.trim() === '') return;
    this.titleIsChange.set(true);
    this.textTaskChange.emit(this.newTitle);
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
