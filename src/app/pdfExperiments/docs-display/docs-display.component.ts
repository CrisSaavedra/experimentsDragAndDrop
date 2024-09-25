import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { JspfdServiceService } from '../service/jspdfSerivce/jspfd-service.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PageBlankComponent } from "../components/page-blank/page-blank.component";

@Component({
  selector: 'app-docs-display',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, PageBlankComponent],
  templateUrl: './docs-display.component.html',
  styleUrl: './docs-display.component.scss'
})
export class DocsDisplayComponent {

  urlPdf?: any;

  constructor(private jspdfService: JspfdServiceService) { }

  callJspdfService() {
    this.urlPdf = this.jspdfService.generatePdf();
  }

}
