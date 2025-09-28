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
  OnInit,
  Renderer2,
  signal,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ToastService, ToastType } from '../../services/toast-service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-to-do-list-toast-component',
  imports: [CommonModule],
  templateUrl: './to-do-list-toast-component.html',
  styleUrl: './to-do-list-toast-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListToastComponent implements AfterViewInit, OnDestroy {
  appColor: Array<string> = [
    '#007bff',
    '#2d0de0ff',
    '#28a745',
    '#dc3545',
    '#ffc107',
    '#17a2b8',
    '#e218b0ff',
  ];

  interavalForOutputToast = 2000; // ms

  toastService = inject(ToastService);
  renderer = inject(Renderer2);
  changeDetection = inject(ChangeDetectorRef);
  private itemCounter = 0;
  private intervalId?: number;

  readonly toastes = signal(this.toastService.textArray);
  @ViewChild('mylist', { static: false }) nativeEl?: ElementRef;
  ngAfterViewInit() {
    this.showToast();
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  showToast() {
    this.intervalId = setInterval(() => {
      this.ChangeDisplayItem();
    }, this.interavalForOutputToast);
  }

  ChangeDisplayItem() {
    this.changeDetection.detectChanges();

    if (this.itemCounter >= this.toastes().length) return;
    console.log(this.nativeEl);
    const item = this.toastes()[this.itemCounter];

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
