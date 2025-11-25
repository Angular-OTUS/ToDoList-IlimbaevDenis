import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListToastComponent } from '../components/to-do-list-toast-component/to-do-list-toast-component';
import { FormsModule } from '@angular/forms';
import { interval, Observable, Subject, takeUntil } from 'rxjs';
import { FakeApiService } from '../services/fake-api-service';
import { StorageService } from '../services/storage-service';
import {  toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToDoListToastComponent,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  api = inject(FakeApiService);
  storage = inject(StorageService);
  getSignalApi =  toSignal(this.api.getTasks());
  getSignalStorage = computed(() =>  this.storage.getTasksSignal());

  ngOnInit(): void {
    interval(5000).subscribe(() => {
      const tasksWithAPi = this.getSignalApi();

      const tasksWithStorage = this.getSignalStorage();

      if(!tasksWithAPi) return;

      if(tasksWithAPi.length == tasksWithStorage!.length){
        console.log("Work on equal")
        return;
      }

      else if(tasksWithAPi.length > tasksWithStorage!.length){
        console.log("Work on more")
        this.OnAPImoreThanStorage();
      }
      else if(tasksWithAPi.length < tasksWithStorage!.length){
        console.log("Work on less")
        this.OnAPilessThanStorage();
      }
    })
 
  }
  OnAPilessThanStorage(): void {
    const tasksWithStorage = this.getSignalStorage(); 
    for(const task of tasksWithStorage()){
        this.api.addTask(task);
    }
  }
  OnAPImoreThanStorage(): void{

    const tasksWithApi = this.getSignalApi()!;

    const tasksWithStorage = this.getSignalStorage(); 

    for(const task of tasksWithApi!){

      if(tasksWithStorage().find(x => x.id == task.id)) continue;

      this.api.deleteTask(task.id);
    }

  }
}
