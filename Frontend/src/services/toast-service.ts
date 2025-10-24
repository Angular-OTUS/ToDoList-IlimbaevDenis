import {  Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  textArray: ToastType[] = [];

  addToast(text: string): void {
    this.textArray.push({ id: this.textArray.length - 1, text: text });
  }
  updateToast(id: number, text: string): void {
    const obj = this.textArray[id];
    obj.text = text;
  }
  deleteToast(id: number): void {
    this.textArray.splice(id, 1);
  }
}
export type ToastType = {
  id: number;
  text: string;
};
