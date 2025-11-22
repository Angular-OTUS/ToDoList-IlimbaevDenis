import { inject, Injectable } from "@angular/core";
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
        this.store.loadTasks();
    }
    getTasks(): Observable<MyTask[]> {
        return toObservable(this.store.getTasks());
    }
    getTask(id: number): MyTask{
        return this.store.getTask(id)!;
    }
    addTask(task: MyTask): void {
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