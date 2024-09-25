import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SafePipe } from '../../../pipes/safe.pipe';
import { JspfdServiceService } from '../../service/jspdfSerivce/jspfd-service.service';

@Component({
  selector: 'app-page-blank',
  standalone: true,
  imports: [DragDropModule, SafePipe],
  templateUrl: './page-blank.component.html',
  styleUrl: './page-blank.component.scss'
})
export class PageBlankComponent implements AfterViewInit {

  @ViewChild('pdf') pdf!: ElementRef<HTMLElement>;

  urlPdf?: string;

  constructor(private jspdfService: JspfdServiceService) { }


  ngAfterViewInit(): void {
    // console.log(this.pdf.nativeElement.textContent);
    let text = this.pdf.nativeElement.textContent;
    let rect = this.pdf.nativeElement.getBoundingClientRect();
    console.log('top: ' + rect.top, 'left: ' + rect.left, 'width: ' + rect.width, 'height: ' + rect.height);
    console.log(rect.top, rect.left);
    
    
    let x = (this.pixelToMM(rect.left) ) * ((21/17)-1.2)  + 185;
    // console.log(x);
    
    let y = this.pixelToMM(rect.top)  - 10 +286;
    // console.log('y', y);
    
    this.jspdfService.generateText(x, y, text ? text : 'fake');

    setTimeout(() => {
      this.urlPdf = this.jspdfService.generatePdf();
    }, 100);

  }


  pixelToMM(pixel: number): number {
    return pixel * 0.2645833333
  }



}
