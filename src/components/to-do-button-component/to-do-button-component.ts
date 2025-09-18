import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, contentChild,
   ElementRef, model, output, 
   OutputEmitterRef,
   } from '@angular/core';
@Component({
  selector: 'app-to-do-button-component',
  imports: [CommonModule],
  templateUrl: './to-do-button-component.html',
  styleUrl: './to-do-button-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ToDoButtonComponent {
   readonly titleWithAttribute = model<string>("", {alias: "myTitle"});
   readonly titleWithContent = contentChild(ElementRef);
   readonly tilte = computed(() => this.computedValue());
   readonly myClickChange: OutputEmitterRef<void> = output();
   readonly styles = model({
    'width': '200px',
    'height': '100px',
    'background-color': 'white'
  });
   myClick(): void {
     this.myClickChange.emit();
  }
  computedValue(): string {
    return this.titleWithAttribute()?.trim() !== "" ? 
    this.titleWithAttribute():
    this.titleWithContent()?.nativeElement
  }
}
