import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  readonly tasks = signal<MyTask[]>([
    { id: 0, text: 'Buy a new gaming laptop', description: 'Tomorrow' },
    { id: 1, text: 'Complete previous task', description: 'Now' },
    { id: 2, text: 'Create some angular app', description: 'Test' },
  ]);

  addNewEl(newValue: MyTask): void {
    this.tasks().push(newValue);

    this.tasks.update(() => this.tasks());
  }
  delNewEl(id: number) {
    this.tasks().splice(id, 1);
    this.tasks.update(() => this.tasks());
  }
  updateElProp<K extends keyof MyTask>(id: number, propertyForChange: K, newValue: any) {
    const obj = this.tasks()[id];
    obj[propertyForChange] = newValue;
    this.tasks.update(() => this.tasks());
  }
}
export type MyTask = {
  id: number;
  text: string | undefined;
  description: string | undefined;
};
