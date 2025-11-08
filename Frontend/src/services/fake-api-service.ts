import { HttpClient } from '@angular/common/http';
import {  inject, Injectable } from '@angular/core';
import { catchError,    map,  Observable,  of, Subscription } from 'rxjs';
import { MyTask } from './tasks-services';
import {  StorageService } from './storage-service';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService  {
  
  httpClient = inject(HttpClient);

  storage = inject(StorageService)
 
  private apiUrl = `http://localhost:5125/tasks`

  getTasks(): Observable<MyTask[]>{
    const obsr = this.httpClient.get<Root>(this.apiUrl).pipe(
        map(x => isTask(x) ? x.tasks : []),
        catchError(error => {
          console.error('Error fetching data:', error);
          return of([]); 
        }));
    obsr.subscribe(tasks => this.storage.takeUp(tasks));
    return obsr;
  }
  // post
  addTask(task: MyTask): Observable<MyTask> {
    return this.httpClient.post(
      this.apiUrl,
      task,
    ).pipe(map(() => task));
  }
  //put
  updateTask(id: number, property: keyof Omit<MyTask, 'id'>, newValue: any): Subscription {
    return this.getTasks().subscribe(tasks => {
      // eslint-disable-next-line eqeqeq
      const task = tasks.find(x => x.id == id)!;
      task[property] = newValue;
      this.httpClient.put<Root>(
      this.apiUrl,
      JSON.stringify(task)
      ).subscribe()
    })
   
  }
  // delete
  deleteTask(id: number): Observable<object>{
    return this.httpClient.delete( 
      this.apiUrl + '/' + id,
    )
  }

}
export type ActionWithTask = (val:MyTask[]) => void;
export type Root = {
  tasks: MyTask[];
}
export function isTask(data: Root | never[]): data is Root {
    return (data as Root) !== null;
  }
export type TaskDelegate = (val: Root | never[]) => void;