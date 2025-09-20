import { Injectable } from '@angular/core';
import { MyTask } from '../components/to-do-list/to-do-list-helper';
@Injectable({
  providedIn: 'root',
})
export class GetTaskServices {
  tasks: MyTask[] = [
    { id: 0, text: 'Buy a new gaming laptop', description: 'Tomorrow' },
    { id: 1, text: 'Complete previous task', description: 'Now' },
    { id: 2, text: 'Create some angular app', description: 'Test' },
  ];
  getTasks(): MyTask[] {
    return this.tasks;
  }
}
