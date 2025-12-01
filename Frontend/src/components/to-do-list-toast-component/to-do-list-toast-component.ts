import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  InjectionToken,
  OnChanges,
  OnDestroy,
  Renderer2,
  signal,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ToastService, ToastType } from '../../services/toast-service';

import { Subject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-to-do-list-toast-component',
  imports: [],
  templateUrl: './to-do-list-toast-component.html',
  styleUrl: './to-do-list-toast-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListToastComponent implements AfterViewInit, OnDestroy {

  toastService = inject(ToastService);
  renderer = inject(Renderer2);
  changeDetection = inject(ChangeDetectorRef);
  readonly toastes = toSignal(this.toastService.getToasts());
  appColor = [
    '#007bff',
    '#2d0de0ff',
    '#28a745',
    '#dc3545',
    '#ffc107',
    '#17a2b8',
    '#e218b0ff',
  ];
  interavalForOutputToast = 2000; // ms
  private itemCounter = 0;
  private intervalId?: number;
  @ViewChild('mylist', { static: false }) nativeEl?: ElementRef;
  
  ngAfterViewInit() : void {
    this.showToast();
  }
  ngOnDestroy() : void {
    clearInterval(this.intervalId);
  }

  showToast() : void {
    this.intervalId = setInterval(() => {
      this.ChangeDisplayItem();
    }, this.interavalForOutputToast);
  }

  ChangeDisplayItem() : void {
    this.changeDetection.detectChanges();

    if (this.itemCounter >= this.toastes()!.length) { return; }
    const item = this.toastes()![this.itemCounter];

    const li = this.renderer.createElement('li');
    const p = this.renderer.createElement('p');

    this.renderer.addClass(li, 'toast-list__item');
    this.renderer.setStyle(li, 'background-color', this.colorRandomiser());

    this.renderer.appendChild(p, this.renderer.createText(item.text));
    this.renderer.appendChild(li, p);
    this.renderer.appendChild(this.nativeEl?.nativeElement, li);

    this.renderer.removeChild(li, p);
    this.renderer.removeChild(this.nativeEl?.nativeElement, li);

    this.itemCounter++;
  }
  colorRandomiser(): string {
    const randomid = Math.floor(Math.random() * this.appColor.length);
    return this.appColor[randomid];
  }
}
