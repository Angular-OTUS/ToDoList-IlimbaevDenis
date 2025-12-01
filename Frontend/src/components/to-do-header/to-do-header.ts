import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ToDoSpinnerService } from '../../services/views/to-do-spinner-service';
import { KindOfSpinner } from '../to-do-spinner/to-do-spinner';

@Component({
  selector: 'app-to-do-header',
  imports: [TranslatePipe],
  providers: [ToDoSpinnerService],
  templateUrl: './to-do-header.html',
  styleUrl: './to-do-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoHeader {

  translate = inject(TranslateService);
  spinner = inject(ToDoSpinnerService);
  constructor(){
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|ru/) ? browserLang : 'en')
  }
  switchLanguage(language: string): void{
    this.translate.use(language);
    console.log(this.translate.currentLoader)
    console.log(language);
     this.spinner.showSpinner('#427b8c', KindOfSpinner.Elipse);
        setTimeout(() => {
          this.spinner.destroySpinner();
        }, 500);
  }
}
