import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  input,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToDoButtonComponent } from '../to-do-button-component/to-do-button-component';
import { MyTask } from '../../services/tasks-services';
@Component({
  selector: 'app-to-do-list-description-change-component',
  imports: [MatInputModule, MatFormFieldModule, CommonModule, FormsModule, ToDoButtonComponent],
  templateUrl: './to-do-list-description-change-component.html',
  styleUrl: './to-do-list-description-change-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListDescriptionChangeComponent {
  stylesForButton = {
    width: '100%',
    height: '80%',
    'background-color': '#91415bff',
    color: 'white',
    border: 'solid',
    'border-radius': '8px',
    'border-color': 'white',
  };
  innerDescription? = '';
  @Input() list: MyTask[] | null | undefined = [];
  readonly sharedId = input<number>();

  readonly description = computed<string | undefined>(
    () => this.list?.find((v) => v.id === this.sharedId()!)?.description,
  );
  readonly descriptionChange = output<string>();

  onChange(): void {
    if (this.innerDescription === null || this.innerDescription?.trim() === '') {
      console.log(this.innerDescription);
      return;
    }
    this.descriptionChange.emit(this.innerDescription!);
  }
}
