import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListToastComponent } from '../components/to-do-list-toast-component/to-do-list-toast-component';
import { FormsModule } from '@angular/forms';
import { ToDoSpinnerService } from '../services/views/to-do-spinner-service';
import { KindOfSpinner } from '../components/to-do-spinner/to-do-spinner';
import { ToDoHeader } from "../components/to-do-header/to-do-header";
import { delay } from 'rxjs';
import { FakeApiService } from '../services/fake-api-service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToDoListToastComponent,
    FormsModule,
    ToDoHeader
],
  providers: [
    ToDoSpinnerService
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {

  listService = inject(FakeApiService);

  spinner = inject(ToDoSpinnerService);

  observer = this.listService.getTasks();

  ngOnInit(): void {
    this.spinner.showSpinner('#427b8c', KindOfSpinner.Elipse);
    // RxJs ver
    this.observer.pipe(
      delay(100),
    ).subscribe(() => {
      this.spinner.destroySpinner();
    })
  }
}