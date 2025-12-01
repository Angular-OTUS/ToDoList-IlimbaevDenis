import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Input,
  input,
  model,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ToDoButtonComponent } from '../to-do-button-component/to-do-button-component';
import { MyTask } from '../../services/tasks-services';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-to-do-list-description-change-component',
  imports: [TranslatePipe,MatInputModule, MatFormFieldModule, FormsModule, ToDoButtonComponent, ReactiveFormsModule],
  templateUrl: './to-do-list-description-change-component.html',
  styleUrl: './to-do-list-description-change-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListDescriptionChangeComponent {

  translate = inject(TranslateService);

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

  descriptionFormControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);

  readonly task = model<MyTask | null>();

  readonly descriptionChange = output<string>();

  onChange(): void {
    if(!this.descriptionFormControl.valid) return;
    if (this.innerDescription === null || this.innerDescription?.trim() === '') {
      console.log(this.innerDescription);
      return;
    }
    this.descriptionChange.emit(this.innerDescription!);
  }
}
