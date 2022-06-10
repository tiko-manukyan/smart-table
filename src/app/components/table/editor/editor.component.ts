import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() value
  data = '';
  Editor = ClassicEditor;
  @Output() save: EventEmitter<any> = new EventEmitter();
  rowData: any;

  constructor() {}

  ngOnInit(): void {}



  getContentText(text: string): string {
    if (text.includes('<p>')) {
      return text.replace(/<\/?p[^>]*>/g, '' );
    } else {
      return text.replace(/<\/?[^>]+(>|$)/g, '');
    }
  }

  onModelChange(text: string): any {
    this.rowData.title = this.getContentText(text);
    this.save.emit(this.rowData);
  }
}
