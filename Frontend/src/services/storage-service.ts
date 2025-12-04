import { effect, inject, Injectable, Signal } from "@angular/core";
import { Observable } from "rxjs";
import { MyTask } from "./tasks-services";
import { MyTaskStore } from "./store-tasks";
import { toObservable } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root',
})
//facade
export class StorageService {
    private store = inject(MyTaskStore);

    constructor(){
    effect(() => {
      const data = this.store.entities();
      if (data.length > 0) {
        console.log('Data loaded:', data);
      }});
    }
    getTasksSignal(): Signal<MyTask[]>{
      return this.store.getTasks();
    }
    getTasksObserver(): Observable<MyTask[]> {
        const tasks = this.store.getTasks();
        return toObservable(tasks);
    }
    getTask(id: number): MyTask{
        return this.store.getTask(id)!;
    }
    addTask(task: MyTask): void {
       console.log("adding in storage");
       this.store.addTask(task);
    }
    deleteTask(id: number): void {
        this.store.deleteTask(id);
    }
    updateTask(id: number, property: keyof Omit<MyTask, "id">, newValue: any): void {

        const task = this.getTask(id);

        task[property] = newValue;

        this.store.updateTask(id, task);
    }
    
}
export function isNotUnderfined<T>(data: T | undefined): data is T {
    return (data as T) !== null;
}