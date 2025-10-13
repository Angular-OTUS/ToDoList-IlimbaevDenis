import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  textArray: ToastType[] = [];

  addToast(text: string) {
    this.textArray.push({ id: this.textArray.length - 1, text: text });
  }
  updateToast(id: number, text: string) {
    const obj = this.textArray[id];
    obj.text = text;
  }
  deleteToast(id: number) {
    this.textArray.splice(id, 1);
  }
}
export type ToastType = {
  id: number;
  text: string;
};
