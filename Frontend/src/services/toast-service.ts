import {  Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private textArray = new BehaviorSubject<ToastType[]>([]);

  getToasts() : Observable<ToastType[]>{
    return this.textArray.asObservable();
  }
  getValue(): ToastType[]{
    return this.textArray.value;
  }
  addToast(text: string): void {
    const arr = this.textArray.value;
    arr.push({ id: arr.length - 1, text: text });
    this.textArray.next(arr);
  }
  deleteToast(id: number): void {
    
    const arr = this.textArray.value;

    const index = arr.findIndex(x => x.id === id);
    
    arr.splice(index, 1);

    this.textArray.next(arr);
  }
}
export type ToastType = {
  id: number;
  text: string;
};
