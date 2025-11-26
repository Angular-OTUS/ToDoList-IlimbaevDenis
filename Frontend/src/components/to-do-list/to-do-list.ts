import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { ROUTES_CONFIG } from '../../app/app.routes';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    ReactiveFormsModule,
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
 
  translate = inject(TranslateService);

  toastService = inject(ToastService);

  changeDetection = inject(ChangeDetectorRef);
  
  spinner = inject(NgxSpinnerService);

  router = inject(Router);

  route = inject(ActivatedRoute);

  addControlForm = new FormControl('', [Validators.required, Validators.maxLength(20)]);

  article = '';

  isActiveChangeTitle = false;

  filterOption = "Progress";

  isStart = false;

  stylesForButton = {
    width: '100%',
    margin: 'auto',
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

  readonly tasksSignal = toSignal(this.listService.getTasks())
  
  readonly tasks = computed(() => this.tasksSignal());
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.isLoading.set(false);
    }, 500);
  }
  addTask(): void {
    if (!this.addControlForm.valid) {
      return;
    }
    const arr = this.tasks() ?? [];
    this.listService.addNewEl(arr, {
      id: arr.length + 1,
      title: this.article,
      description: this.description(),
      status: 'Progress',
    }
    );
    this.toastService.addToast(`Add task: ${this.article} `);
  }
  changeToDoListItemOnPreview(id: number): void {
    // eslint-disable-next-line eqeqeq
    console.log((this.tasks()?.find(x => x.id == id) as MyTask));

    this.router.navigate([ROUTES_CONFIG.BACKLOG, id]);
  }
  clickOnRadioButton(): void {

    console.log(this.filterOption)

    this.filter.set(this.filterOption);
  }
}
