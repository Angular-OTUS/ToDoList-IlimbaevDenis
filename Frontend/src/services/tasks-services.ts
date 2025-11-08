import {  inject, Injectable } from '@angular/core';
import { FakeApiService } from './fake-api-service';
import { distinct, filter, map, merge, mergeMap,  Observable,  scan, Subscription } from 'rxjs';
import { StorageService } from './storage-service';


@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  tasksAPI = inject(FakeApiService);
  storage = inject(StorageService);
  addNewElId(newValue: MyTask): void{
    this.tasksAPI.addTask(newValue).subscribe(() => {console.log("Add")});
    this.storage.addTask(newValue);
  }
  addNewEl(arr: MyTask[], newValue: MyTask): MyTask[] {
    arr.push(newValue);
    this.addNewElId(newValue);
    return arr;
  }
  delNewElId(id: number): void{
    this.tasksAPI.deleteTask(id).subscribe(() => {console.log("Delete")});
    this.storage.deleteTask(id);
  }
  delNewEl(arr: MyTask[], id: number): MyTask[] {
    const index = arr.indexOf(arr.find(x => x.id === id)!)
    console.log('index was: '+ index)
    arr.splice( index, 1);
    this.delNewElId(id)
    return arr;
  }
  updateElPropId<K extends keyof Omit<MyTask, 'id'>>(
    id: number,
    propertyForChange: K,
    newValue: any,): void{
      this.tasksAPI.updateTask(id, propertyForChange, newValue);
      this.storage.updateTask(id, propertyForChange, newValue);
  }
  updateElProp<K extends keyof Omit<MyTask, 'id'>>(
    arr: MyTask[],
    id: number,
    propertyForChange: K,
    newValue: any,
  ): MyTask[] {
    const obj = arr.find(x => x.id === id);
    obj![propertyForChange] = newValue;
    this.updateElPropId(id, propertyForChange, newValue)
    return arr;
  }
  getTask(id: number): Observable<MyTask>{
    const obsr = this.getTasks()
     .pipe(
      // eslint-disable-next-line eqeqeq
      map(arr => arr.find(x => x.id == id)!)
    )
    obsr.subscribe((t) => console.log(t))
    return obsr;
  }
  getTasks() : Observable<MyTask[]> {
    const tasksWithApi = this.tasksAPI.getTasks();
    tasksWithApi.subscribe((val) => "With API: " + console.log(val))
    const tasksWithStorage = this.tasksAPI.getTasks();
    tasksWithStorage.subscribe((val) => "With Storage: " + console.log(val))
    return merge(tasksWithApi, tasksWithStorage).pipe(
      mergeMap(arr => arr),
      scan((acc: MyTask[], value) => {
      if (!acc.find(v => v.id === value.id)) {
      acc.push(value);
       }
      return acc;
      }, []),
      distinct()
    )
  }
}
export type MyTask = {
  id: number;
  title: string;
  description: string | undefined;
  status: 'Progress' | 'Completed';
};
