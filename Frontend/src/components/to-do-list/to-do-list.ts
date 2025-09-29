import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostBinding,
  inject,
  input,
  model,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToDoListItemComponent } from '../to-do-list-item-component/to-do-list-item-component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { ToDoButtonComponent } from '../to-do-button-component/to-do-button-component';
import { EnterControl } from '../../directives/enter-control-directive/enter-control';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MyTask, TaskServices } from '../../services/get-tasks-services';
import { ToastService } from '../../services/toast-service';
import { ToDoListItemCheckboxComponent } from '../to-do-list-item-checkbox-component/to-do-list-item-checkbox-component';
@Component({
  selector: 'app-to-do-list',
  imports: [
    FormsModule,
    ToDoListItemComponent,
    ToDoButtonComponent,
    MatInputModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    CommonModule,
    EnterControl,
    ScrollingModule,
  ],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToDoList implements OnInit {

  listService = inject(TaskServices);
  toastService = inject(ToastService);
  changeDetection = inject(ChangeDetectorRef);
  article: string = '';

  stylesForButton = {
    width: '200px',
    height: '100px',
    'background-color': '#a245b4ff',
    border: 'solid',
    'border-radius': '8px',
    'border-color': 'white',
    color: 'white',
  };
  readonly description = model<string>();
  readonly filter = input<string>();
  readonly selectedItemId = signal<number>(0);
  readonly isLoading = signal<boolean>(true);
  readonly tasks = signal<MyTask[] | null>(null);
  private spinner = inject(NgxSpinnerService);
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.isLoading.set(false);
    }, 500);
    this.listService.getTasks((list) => this.tasks.set(list) )

  }


  addTask(): void {
    if (this.article === null || this.article?.trim() === '') {
      return;
    }
    if (!this.tasks()) return;
    this.tasks.update((arr) =>
      this.listService.addNewEl(arr!, {
        id: this.tasks()!.length,
        title: this.article,
        description: this.description(),
        status: 'Progress',
      }),
    );
    this.toastService.addToast(`Add task: ${this.article}`);
  }
  deleteTask(id: number): void {
    if (!this.tasks()) return;
    this.tasks.update((arr) => this.listService.delNewEl(arr!, id));
    this.toastService.addToast(`Delete task with id: ${id}`);
  }
  changeTitle(title: string) {
    if (!this.tasks()) return;
    this.tasks.update((arr) =>
      this.listService.updateElProp(arr!, this.selectedItemId(), 'title', title),
    );
    this.toastService.addToast(`Change title element id: ${this.selectedItemId()}`);
  }
  changeStatus(status: boolean) {
    this.tasks.update((arr) =>
      this.listService.updateElProp(
        arr!,
        this.selectedItemId(),
        'status',
        status ? 'Completed' : 'Progress',
      ),
    );
  }
  selectId(id: number): void {
    this.selectedItemId.set(id);
  }
  public rerender(): void {
    this.changeDetection.markForCheck();
  }
}
