import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class JspfdServiceService {

  private doc = new jsPDF();

  urlPdf?: any;

  constructor() { }

  generateText(x: number, y: number, text: string) {
    this.doc.setFontSize(34);
    this.doc.text(text, x, y);
  }

  generatePdf() {
    return this.doc.output('datauristring');
  }
}
