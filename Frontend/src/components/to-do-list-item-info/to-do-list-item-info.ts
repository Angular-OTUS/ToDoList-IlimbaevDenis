import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, inject, input, model } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-to-do-list-item-info',
  imports: [],
  templateUrl: './to-do-list-item-info.html',
  styleUrl: './to-do-list-item-info.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoListItemInfo {
  
  translate = inject(TranslateService);

  changeDetectionRef = inject(ChangeDetectorRef);

  readonly description = model<string>();

  readonly desc = computed(() => { return this.description() });

  readonly title = model<string>();

  readonly tit = computed(() => { return this.title() });

  readonly status = model<string>();

  readonly stat = computed(() => { return this.status() });

  rerender(): void{
    this.changeDetectionRef.markForCheck();
  }
}
