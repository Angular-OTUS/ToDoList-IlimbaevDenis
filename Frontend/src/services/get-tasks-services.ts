import { ChangeDetectorRef, inject, Injectable } from '@angular/core';
import { FakeApiService, Root } from './fake-api-service';
import { of, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  tasksAPI = inject(FakeApiService);
  addNewEl(arr: MyTask[], newValue: MyTask): MyTask[] {
    arr.push(newValue);
    return arr;
  }
  delNewEl(arr: MyTask[], id: number): MyTask[] {
    arr.splice(id, 1);
    return arr;
  }
  updateElProp<K extends keyof MyTask>(
    arr: MyTask[],
    id: number,
    propertyForChange: K,
    newValue: any,
  ): MyTask[] {
    const obj = arr[id];
    obj[propertyForChange] = newValue;
    return arr;
  }

  getTasks(delegate: (val: MyTask[]) => void): Subscription  {

    return this.tasksAPI.getTasks((root) => {
       const list: MyTask[] = [];
        if(this.isTask(root)){
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
  isTask(data: Root | never[]): data is Root {
    return (data as Root) !== null;
  }
}
export type MyTask = {
  id: number;
  title: string;
  description: string | undefined;
  status: 'Progress' | 'Completed';
};
