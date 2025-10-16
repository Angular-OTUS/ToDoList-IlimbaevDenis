import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, OnChanges, OnInit, signal, viewChildren,
 } from '@angular/core';
import { ToDoListDescriptionChangeComponent } 
from "../to-do-list-description-change-component/to-do-list-description-change-component";
import { ToDoListItemComponent } from "../to-do-list-item-component/to-do-list-item-component";
import { ActivatedRoute, Router } from '@angular/router';
import { MyTask, TaskServices } from '../../services/tasks-services';
import { ToastService } from '../../services/toast-service';
@Component({
  selector: 'app-to-do-item-view',
  imports: [ToDoListDescriptionChangeComponent, ToDoListItemComponent],
  templateUrl: './to-do-item-view.html',
  providers: [Router],
  styleUrl: './to-do-item-view.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoItemView implements OnInit {

  isStart = true;

  isWantChangeTitle = false;

  route = inject(ActivatedRoute)

  listService = inject(TaskServices);

  toastService = inject(ToastService);

  router = inject(Router);

  readonly id = signal<number>(0);

  readonly task = signal<MyTask | null>(null)

  readonly title = computed(() => this.task()?.title )

  readonly description = computed(() => this.task()?.description)

  readonly status = computed(() => this.task()?.status)

  readonly todoItems = viewChildren(ToDoListItemComponent);

  activeChangeTitle(): void{
    this.isWantChangeTitle = true;
    this.isStart = false;
  }
  deleteTask(id: number): void {
    if (!this.task()) { return; }
    this.task.update(() => { this.listService.delNewElId(id); return null });
    this.toastService.addToast(`Delete task with id: ${id}`);
    this.router.navigate(['tasks'])
  }
  changeTitle(title: string | undefined): void {
    if (!this.task()) { return; }
    this.task.update((t) =>
    {  
      if(!t){
        console.log("Task is null now: " + t)
        return t;
      }
      const taskNew: MyTask  = {
        description: t?.description,
        status: t.status,
        id: t.id,
        title: ''
      }
      if(!title){
        console.log("Title is null: " + title)
        return t;
      }
      taskNew.title = title;
      this.listService.updateElPropId(this.id(), 'title', title);
      return taskNew;
    }
    );
    this.toastService.addToast(`Change title element id: ${this.id()}`);
  }
  updateDescription(descriptionArg: string): void {
   this.task.update((t) =>
    {  
      this.listService.updateElPropId(this.id(), 'description', descriptionArg);
      if(!t) { return t; } 
      t.description = descriptionArg;
      return t;
    });
    this.toastService.addToast(`Change desc element id: ${this.id()}`);
  }
  ngOnInit(): void 
  {
    const id = this.route.snapshot.params['id'];

    this.id.set(id);
 
    this.listService.getTask(id, (t) => {
      this.task.set(t)
    })
  }
}
