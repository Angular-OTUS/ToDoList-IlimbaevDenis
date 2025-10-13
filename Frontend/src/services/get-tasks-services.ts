import { ChangeDetectorRef, inject, Injectable } from '@angular/core';
import { FakeApiService, isTask, Root } from './fake-api-service';
import { of, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  tasksAPI = inject(FakeApiService);
  addNewEl(arr: MyTask[], newValue: MyTask): MyTask[] {
    arr.push(newValue);
    this.tasksAPI.addTask(newValue);
    return arr;
  }
  delNewEl(arr: MyTask[], id: number): MyTask[] {
    arr.splice(id, 1);
    this.tasksAPI.deleteTask(id);
    return arr;
  }
  updateElProp<K extends keyof Omit<MyTask, 'id'>>(
    arr: MyTask[],
    id: number,
    propertyForChange: K,
    newValue: any,
  ): MyTask[] {
    const obj = arr[id];
    obj[propertyForChange] = newValue;
    this.tasksAPI.updateTask(id, propertyForChange, newValue)
    return arr;
  }
  getTasks(delegate: (val: MyTask[]) => void): Subscription  {

    return this.tasksAPI.getTasks((root) => {
       const list: MyTask[] = [];
        if(isTask(root)){
          console.log(root);
           // eslint-disable-next-line for-direction
           for (let counter = 0; counter < root.tasks.length; counter++) {
        list.push({
          id: counter,
          title:  root.tasks[counter].title,
          status:  root.tasks[counter].status,
          description: root.tasks[counter].description,
        });
      }
      delegate(list);
      return of(list);
        }
        return of([]);
       
    });
  }
}
export type MyTask = {
  id: number;
  title: string;
  description: string | undefined;
  status: 'Progress' | 'Completed';
};
