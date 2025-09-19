import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
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
import { MyTask, ToDoListService } from '../../services/to-do-list-list-service';
@Component({
  selector: 'app-to-do-list-description-change-component',
  imports: [MatInputModule, MatFormFieldModule, CommonModule, FormsModule, ToDoButtonComponent],
  templateUrl: './to-do-list-description-change-component.html',
  styleUrl: './to-do-list-description-change-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListDescriptionChangeComponent {
  stylesForButton = {
    width: '70px',
    height: '50px',
    'background-color': '#727472ff',
    color: 'black',
    'font-size': '10px',
  };
  innerDescription? = '';
  service = inject(ToDoListService);
  readonly sharedId = input<number>();

  readonly description = computed<string | undefined>(
    () => this.service.tasks().find((v) => v.id === this.sharedId()!)?.description,
  );

  onChange(): void {
    if (this.innerDescription === null || this.innerDescription?.trim() === '') {
      return;
    }
    this.service.updateElProp(this.sharedId()!, 'description', this.innerDescription);
  }
}
