import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import {ToDoList} from "../../components/to-do-list/to-do-list"
@Directive({
  selector: '[appEnterControl]'
})
export class EnterControl {
  parentEl = inject(ToDoList);
  
  textarea = inject(ElementRef);

  @HostListener("window:keydown.enter") OnKeyDownEnter(): void {
    this.parentEl.addTask();
    this.parentEl.article = "";
    this.textarea.nativeElement["value"] = "";
  }
}
