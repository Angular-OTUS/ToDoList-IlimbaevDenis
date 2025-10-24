
import {  inject, Injectable } from '@angular/core';
import { FakeApiService, isTask } from './fake-api-service';
import { of, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  tasksAPI = inject(FakeApiService);
  addNewElId(newValue: MyTask): void{
    this.tasksAPI.addTask(newValue);
  }
  addNewEl(arr: MyTask[], newValue: MyTask): MyTask[] {
    arr.push(newValue);
    this.addNewElId(newValue);
    return arr;
  }
  delNewElId(id: number): void{
    this.tasksAPI.deleteTask(id);
  }
  delNewEl(arr: MyTask[], id: number): MyTask[] {
    // eslint-disable-next-line eqeqeq
    const index = arr.indexOf(arr.find(x => x.id == id)!)
    console.log('index was: '+ index)
    arr.splice( index, 1);
    this.delNewElId(id)
    return arr;
  }
  updateElPropId<K extends keyof Omit<MyTask, 'id'>>(
    id: number,
    propertyForChange: K,
    newValue: any,): void{
      this.tasksAPI.updateTask(id, propertyForChange, newValue)
  }
  updateElProp<K extends keyof Omit<MyTask, 'id'>>(
    arr: MyTask[],
    id: number,
    propertyForChange: K,
    newValue: any,
  ): MyTask[] {
    // eslint-disable-next-line eqeqeq
    const obj = arr.find(x => x.id == id);
    obj![propertyForChange] = newValue;
    this.updateElPropId(id, propertyForChange, newValue)
    return arr;
  }
  getTask(id: number, delegate: (val: MyTask) => void): void{
     this.getTasks((list) => {
       // eslint-disable-next-line eqeqeq
       const task = list.find(x => x.id == id);
       delegate(task!);
     });
  }
  getTasks(delegate: (val: MyTask[]) => void): Subscription  {
    return this.tasksAPI.getTasks((root) => {
        if(isTask(root)){
          console.log(root);
      delegate(root.tasks);
      return of(root.tasks);
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
