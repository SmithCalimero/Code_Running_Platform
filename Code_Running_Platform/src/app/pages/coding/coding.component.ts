import { Component } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent {

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

}
