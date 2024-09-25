import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocsDisplayComponent } from "./pdfExperiments/docs-display/docs-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DocsDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'experimentsDragAndDrop';
}
