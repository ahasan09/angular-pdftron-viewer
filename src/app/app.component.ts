import { Component } from '@angular/core';
import { WebviewerComponent } from './webviewer/webviewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WebviewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly docPath = 'files/ziadost_default.pdf';
}
