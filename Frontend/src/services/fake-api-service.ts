import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { catchError, Observable, of, Subscription, throwError, timeout } from 'rxjs';

import { MyTask } from './tasks-services';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  readonly config?;
  
  httpClient = inject(HttpClient);
 
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
  addTask(task: MyTask): void {
    console.log("now task: ")
    console.log(task)
    this.httpClient.post(
      this.apiUrl,
      task,
    ).subscribe(() => {console.log("Adding")})
  }
  //put
  updateTask(id: number, property: keyof Omit<MyTask, 'id'>, newValue: any): void {
     this.getTasks((root) => {
      if(!isTask(root)) {return;}
      const task = root.tasks.find(x => x.id === id)!;
      task[property] = newValue;
      this.httpClient.put<Root>(
      this.apiUrl,
      JSON.stringify(task)
      ).subscribe(() => {console.log("Updating")})
    })
   
  }
  // delete
  deleteTask(id: number): void{
     console.log( this.apiUrl + '/' + id);
     this.httpClient.delete( 
      this.apiUrl + '/' + id,
    ).subscribe(() => {console.log("Deleting")})
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