import { ChangeDetectionStrategy, Component, computed, Input, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MyTask } from '../to-do-list/to-do-list-helper';
import { ToDoButtonComponent } from '../to-do-button-component/to-do-button-component';
@Component({
  selector: 'app-to-do-list-description-change-component',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ToDoButtonComponent 
],
  templateUrl: './to-do-list-description-change-component.html',
  styleUrl: './to-do-list-description-change-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoListDescriptionChangeComponent{
   stylesForButton = {'width': '70px', 'height': '50px', 'background-color': '#727472ff', 'color': 'black', 
     'font-size': '10px'}
  ;
  innerDescription? = "";
   @Input() list: MyTask[] | undefined = [];
   readonly sharedId = input<number>();
   
   readonly description = computed<string | undefined>(
    () => this.list?.find(v => v.id === this.sharedId()!)?.description)
   readonly descriptionChange = output<string>();
  
   onChange(): void{
    
    if(this.innerDescription === null || this.innerDescription?.trim() === ""){
      console.log(this.innerDescription);
      return;
    }
    this.descriptionChange.emit(this.innerDescription!);
   }
}
