import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  model,
  NgZone,
  OnInit,
  signal,
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
import { MyTask, TaskServices } from '../../services/tasks-services';
import { ToastService } from '../../services/toast-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-to-do-list',
  imports: [
    FormsModule,
    ToDoListItemComponent,
    ToDoButtonComponent,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    NgxSpinnerModule,
    CommonModule,
    EnterControl,
    ScrollingModule,
  ],
  providers: [
    Router,
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
  
  spinner = inject(NgxSpinnerService);

  router = inject(Router);

  route = inject(ActivatedRoute);

  article = '';

  isActiveChangeTitle = false;

  filterOption = "Progress";

  isStart = false;

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

  readonly filter = signal<string>('Progress');

  readonly selectedItemId = signal<number>(0);

  readonly isLoading = signal<boolean>(true);

  readonly tasks = signal<MyTask[] | null>(null);
  
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.isLoading.set(false);
    }, 500);
    this.listService.getTasks((list) => {
      console.log(list);
      this.tasks.set(list)
    } )
  }
  addTask(): void {
    if (this.article === null || this.article?.trim() === '') {
      return;
    }
    if (!this.tasks()) { return; }
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
  changeToDoListItemOnPreview(id: number): void {

    // eslint-disable-next-line eqeqeq
    console.log((this.tasks()?.find(x => x.id == id) as MyTask));

    this.router.navigate(['tasks/', id]);


  }
  clickOnRadioButton(): void {

    console.log(this.filterOption)

    this.filter.set(this.filterOption);
  }
}
