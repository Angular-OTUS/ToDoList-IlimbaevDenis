import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, map, never, Observable, Subscription } from "rxjs";
import { isTask, Root, TaskDelegate } from "./fake-api-service";
import { MyTask } from "./tasks-services";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
    private store = new BehaviorSubject<Root | never[]>([]);
    takeUp(tasks: MyTask[]): void{
        const root: Root = {
            tasks: tasks
        };
        this.store.next(root);
    }
    getTasksObject(): MyTask[]{
        const val = this.store.value
        if(!isTask(val)) { return []; }
        return val.tasks;
    }
    getTasks(): Observable<MyTask[]> {
        return this.store.asObservable().pipe(
             map(x => isTask(x) ? x.tasks : []),
        )
    }
    getTask(id: number): Observable<MyTask>{
        return this.store.asObservable().pipe(
            map(x => isTask(x) ? x.tasks.find(j => j.id === id) : undefined ),
            filter(x => isNotUnderfined(x))
        );
    }
    addTask(task: MyTask): void {
        const tasks = this.getTasksObject();
        
        tasks.push(task);

        this.takeUp(tasks)
    }
    deleteTask(id: number): void {
        const tasks = this.getTasksObject();

        const index = tasks.findIndex(x => x.id === id);
        
        tasks.splice(index, 1);

        this.takeUp(tasks);
    }
    updateTask(id: number, property: keyof Omit<MyTask, "id">, newValue: any): void {
        const task = this.getTasksObject().find(x => x.id === id);

        if(!task) {  return; }

        task[property] = newValue

        this.deleteTask(id);

        this.addTask(task);
    }
    
}
export function isNotUnderfined<T>(data: T | undefined): data is T {
    return (data as T) !== null;
}