import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, inject, linkedSignal, OnInit, signal, viewChild, viewChildren,
 } from '@angular/core';
import { ToDoListDescriptionChangeComponent } 
from "../to-do-list-description-change-component/to-do-list-description-change-component";
import { ToDoListItemComponent } from "../to-do-list-item-component/to-do-list-item-component";
import { ActivatedRoute, Router } from '@angular/router';
import { MyTask, TaskServices } from '../../services/tasks-services';
import { ToastService } from '../../services/toast-service';
import { ToDoListItemInfo } from "../to-do-list-item-info/to-do-list-item-info";
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-to-do-item-view',
  imports: [ToDoListDescriptionChangeComponent, ToDoListItemComponent, ToDoListItemInfo, ReactiveFormsModule],
  templateUrl: './to-do-item-view.html',
  providers: [Router],
  styleUrl: './to-do-item-view.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoItemView  {


  isStart = true;

  isWantChangeTitle = false;

  route = inject(ActivatedRoute)

  listService = inject(TaskServices);

  translate = inject(TranslateService);

  toastService = inject(ToastService);

  router = inject(Router);

  rerender = inject(ChangeDetectorRef);

  readonly infoComponent = viewChild(ToDoListItemInfo);

  readonly id = signal<number>(this.route.snapshot.params['id']); 

  readonly taskSignal = toSignal(this.listService.getTask(this.id()))

  readonly task = linkedSignal(() => this.taskSignal())

  readonly title = computed(() => this.task()?.title)

  readonly description = computed(() => this.task()?.description)

  readonly status = computed(() => this.task()?.status)

  readonly todoItems = viewChildren(ToDoListItemComponent);

  readonly lang = signal(this.translate.getCurrentLang());

  activeChangeTitle(): void{
    this.isWantChangeTitle = true;
    this.isStart = false;
  }
  deleteTask(id: number): void {
    if (!this.task()) { return; }
    this.listService.delNewElId(id); 
  
    this.toastService.addToast(this.lang() === 'en' ? `Delete task with id: ${id}` :  `Удалён таск: ${id}`);
    this.router.navigate(['tasks'])
  }
  changeTitle(title: string | undefined): void {
    if (!this.task() || !title ) { return; }
    this.updateTask('title', title);
  }
  changeStatus(check: boolean): void {
    const status = check ?  'Completed' : 'Progress';
    this.updateTask('status', status);
    this.router.navigate(['tasks'])
  }
  updateDescription(descriptionArg: string): void {
     if (!this.task()) { return; }
     this.updateTask('description', descriptionArg);
  }

  private updateTask(propertyForChange: keyof Omit<MyTask, 'id'>, newValue: any): void{
    this.task.update(v => {
      if(!v) {return v;}
      const taskV: Partial<MyTask> = {
        title: v.title,
        id: v.id,
        description: v.description,
        status: v.status
      };
      taskV[propertyForChange] = newValue;
      this.listService.updateElPropId(this.id(), propertyForChange, newValue);
      this.rerender.detectChanges();
      this.infoComponent()?.rerender();
      this.toastService.addToast(this.lang() === 'en' ? `Change ${propertyForChange} element id: ${this.id()}` : 
      `Изменено ${propertyForChange} с id: ${this.id()}`);
      return taskV as MyTask;
    })
  }

}
