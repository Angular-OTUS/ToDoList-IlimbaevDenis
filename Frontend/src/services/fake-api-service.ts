import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { catchError, Observable, of, Subscription, throwError, timeout } from 'rxjs';

import { MyTask } from './get-tasks-services';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  readonly config?;
  
  httpClient = inject(HttpClient);
  // get
  readonly fastGet = httpResource<Root>(() => 
     this.apiUrl,
  );
  readonly value = computed(() => this.fastGet.value());
  private apiUrl = `http://localhost:5125/tasks`
  constructor() {
    this.config = {
      token: environment.token,
      basket: environment.basket,
    };
  }
  
  getTasks(func: TaskDelegate): Subscription{
    return this.httpClient.get<Root>(this.apiUrl).pipe(
        catchError(error => {
          console.error('Error fetching data:', error);
          return of([]); 
        })).subscribe(func);
  }
  // post
  addTask(task: Task): void {
    const newdata = this.doSomeOperation((tasks) => {
      tasks.push(task);
    });
    this.httpClient.post<Root>(
      this.apiUrl,
      newdata,
    );
  }
  //put
  updateTask(id: number, property: keyof Omit<MyTask, 'id'>, newValue: any): void {
    const newdata = this.doSomeOperation((tasks) => {
      tasks[id][property] = newValue;
    });

    this.httpClient.put<Root>(
      this.apiUrl,
      newdata,
    );
  }
  private doSomeOperation(someAction: ActionWithTask): Root {
    const data: Root = this.fastGet.value()!;

    const tasks = data.tasks;

    someAction(tasks);

    data.tasks = tasks;

    return data;
  }
}
export type ActionWithTask = (val: Task[]) => void;
export type Root = {
  tasks: Task[];
}

export type Task = Pick<MyTask, 'title' | 'description' | 'status'>;
export type TaskDelegate = (val: Root | never[]) => void;